import {
  ElAlert,
  ElBacktop,
  ElButton,
  ElCol,
  ElDivider,
  ElEmpty,
  ElInfiniteScroll,
  ElLoading,
  ElMessage,
  ElMessageBox,
  ElNotification,
  ElRow,
} from 'element-plus';

const components = [ElRow, ElCol, ElButton, ElBacktop, ElDivider, ElAlert, ElEmpty];
const plugins = [ElInfiniteScroll, ElLoading, ElMessage, ElMessageBox, ElNotification];
const installElement = (app) => {
  components.forEach((component) => {
    app.component(component.name, component);
  });

  plugins.forEach((plugin) => {
    app.use(plugin);
  });
};

export {
    installElement
}
