import { API_BASE } from './config';

export const dashboardService = {
  getDashboardSummary: async (dealerId) => {
    try {
      const res = await fetch(`${API_BASE}/orders`);
      if (!res.ok) throw new Error('Failed to fetch orders');
      const allOrders = await res.json();
      if (!Array.isArray(allOrders)) throw new Error('Invalid data format');
      
      const dealerOrders = allOrders.filter(o => o.dealerId === dealerId);
      const today = new Date().toISOString().split('T')[0];
      
      const totalOrders = dealerOrders.length;
      const receivingOrders = dealerOrders.filter(o => o.orderStatus === 'receiving').length;
      const ordersReceivedByDealer = dealerOrders.filter(o => ['received', 'pending', 'completed'].includes(o.orderStatus)).length;
      const pendingOrders = dealerOrders.filter(o => o.orderStatus === 'pending').length;
      const completedOrders = dealerOrders.filter(o => o.orderStatus === 'completed').length;
      const todayCompletedOrders = dealerOrders.filter(o => 
        o.orderStatus === 'completed' && 
        o.completedDate?.startsWith(today)
      ).length;
      const todayScheduledAppointments = dealerOrders.filter(o => 
        o.appointmentDate === today
      ).length;
      
      return { 
        success: true, 
        data: {
          totalOrders,
          receivingOrders,
          ordersReceivedByDealer,
          pendingOrders,
          completedOrders,
          todayCompletedOrders,
          todayScheduledAppointments
        }
      };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  getAllDashboardData: async (dealerId = "D001") => {
    try {
      const [dealersRes, ordersRes] = await Promise.all([
        fetch(`${API_BASE}/dealers`),
        fetch(`${API_BASE}/orders`)
      ]);
      
      if (!dealersRes.ok || !ordersRes.ok) {
        throw new Error('Failed to fetch data');
      }
      
      const dealers = await dealersRes.json();
      const allOrders = await ordersRes.json();
      
      if (!Array.isArray(dealers) || !Array.isArray(allOrders)) {
        throw new Error('Invalid data format');
      }
      
      const dealer = dealers.find(d => d.dealerId === dealerId);
      if (!dealer) {
        return { success: false, error: "Dealer not found" };
      }
      const { password: _, ...dealerData } = dealer;
      
      const dealerOrders = allOrders.filter(o => o.dealerId === dealerId);
      const today = new Date().toISOString().split('T')[0];
      
      const totalOrders = dealerOrders.length;
      const receivingOrders = dealerOrders.filter(o => o.orderStatus === 'receiving').length;
      const ordersReceivedByDealer = dealerOrders.filter(o => ['received', 'pending', 'completed'].includes(o.orderStatus)).length;
      const pendingOrders = dealerOrders.filter(o => o.orderStatus === 'pending').length;
      const completedOrders = dealerOrders.filter(o => o.orderStatus === 'completed').length;
      const todayCompletedOrders = dealerOrders.filter(o => 
        o.orderStatus === 'completed' && 
        o.completedDate?.startsWith(today)
      ).length;

      // Scheduled Appointments: next 4 upcoming dates with non-completed orders
      const scheduledMap = {};
      dealerOrders.forEach(order => {
        if (order.appointmentDate && order.orderStatus !== 'completed' && order.appointmentDate >= today) {
          scheduledMap[order.appointmentDate] = (scheduledMap[order.appointmentDate] || 0) + 1;
        }
      });
      const scheduledAppointments = Object.entries(scheduledMap)
        .sort(([a], [b]) => a.localeCompare(b))
        .slice(0, 4)
        .map(([date, orders]) => ({ date, orders }));

      // HSRP Received: same 4 dates, count only plates received by dealer
      const scheduledDates = scheduledAppointments.map(s => s.date);
      const hsrpReceivedMap = {};
      dealerOrders.forEach(order => {
        if (scheduledDates.includes(order.appointmentDate) && ['received', 'pending', 'completed'].includes(order.orderStatus)) {
          hsrpReceivedMap[order.appointmentDate] = (hsrpReceivedMap[order.appointmentDate] || 0) + 1;
        }
      });
      const hsrpReceived = scheduledDates.map(date => ({ date, count: hsrpReceivedMap[date] || 0 }));

      const quickStats = [
        { title: "Today's Completed Orders", count: todayCompletedOrders },
        { title: "Today's Scheduled Appointments", count: scheduledMap[today] || 0 },
        { title: "Pending for Affixation", count: pendingOrders }
      ];

      return {
        success: true,
        data: {
          dealerProfile: dealerData,
          orderSummary: [
            { label: "Total Orders", count: totalOrders },
            { label: "HSRP Received to Dealer", count: ordersReceivedByDealer },
            { label: "Pending to Complete", count: pendingOrders },
            { label: "Total Affixation Till Date", count: completedOrders }
          ],
          scheduledAppointments,
          hsrpReceived,
          quickStats
        }
      };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },
};
