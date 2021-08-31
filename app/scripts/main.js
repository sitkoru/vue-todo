import { createApp } from 'vue';
import App from '@/views/layouts/app';
import BalmUI from 'balm-ui'; // Official Google Material Components
import BalmUIPlus from 'balm-ui/dist/balm-ui-plus'; // BalmJS Team Material Components
import UiButton from 'balm-ui/components/button';
import vButton from 'balm-ui/directives/button';
import UiTextfieldComponents from 'balm-ui/components/textfield';

const app = createApp(App);

app.use(BalmUI, {
  UiIconButton: {
  },
  UiList: {
  },
  UiDialog: {
  },
  UiDialogTitle: {
  },
  UiDialogActions: {
  },
  UiFab: {
  }
});
app.use(BalmUIPlus); 
app.use(UiButton); 
app.use(vButton); 
app.use(UiTextfieldComponents, {
    UiTextfield: {
    }
  });
  
app.mount('#app');