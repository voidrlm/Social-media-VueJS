import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        accent: "#F3F4F6", // Light gray background
        primary: "#6366F1", // Indigo
        secondary: "#FFFFFF", // White
        error: "#EF4444",
        success: "#10B981",
        info: "#3B82F6",
        warning: "#F59E0B",
      },
      dark: {
        accent: "#0F172A", // Dark blue-gray background
        primary: "#818CF8", // Lighter Indigo
        secondary: "#1E293B", // Darker blue-gray for cards
        error: "#EF4444",
        success: "#10B981",
        info: "#3B82F6",
        warning: "#F59E0B",
      },
        success: "#45a5ae",
      },
    },
  },
});
