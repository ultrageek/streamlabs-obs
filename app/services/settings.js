import Service from './service';
import Obs from '../api/Obs';

const nodeObs = Obs.nodeObs;

export default class SettingsService extends Service {

  getCategories () {
    return nodeObs.OBS_settings_getListCategories();
  }

  getSettings (categoryName) {
    return nodeObs.OBS_settings_getSettings(categoryName);
  }

  setSettings (categoryName, settingsData) {
    return nodeObs.OBS_settings_saveSettings(categoryName, settingsData);
  }
}