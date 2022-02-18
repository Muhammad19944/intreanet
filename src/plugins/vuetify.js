import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import ru from 'vuetify/lib/locale/ru';

// Custom svg icons
import FileExport from "@/common/components/svg/FileExport";
import FileInvoice from "@/common/components/svg/FileInvoice";
import FileImport from "@/common/components/svg/FileImport";
import ClipboardPaste from "@/common/components/svg/ClipboardPaste";
import CogsIcon from "@/common/components/svg/CogsIcon";

Vue.use(Vuetify);

export default new Vuetify({
	theme: {
		options: {
			customProperties: true,
		},
		themes: {
			light: {
              primary: "#1A5CFF",
              success: "#38CB89",
              warning: "#FFAB00",
              orange: "#FF5630"
			},
			dark: {
				primary: "#1A5CFF",
				success: "#38CB89",
				warning: "#FFAB00",
				orange: "#FF5630"
			},
		},
	},
	lang: {
		locales: { ru },
		current: 'ru',
	},
	icons: {
		values: {
			fileExport: {
				component: FileExport
			},
			fileInvoice: {
				component: FileInvoice
			},
			fileImport: {
				component: FileImport
			},
			clipboardPaste: {
				component: ClipboardPaste
			},
			cogsIcon: {
				component: CogsIcon
			}
		}
	},
});
