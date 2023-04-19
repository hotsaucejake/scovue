import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { SettingsInterface } from '@/services/jotsauce/interfaces/settings/settings.interface';

export const useJotsauceSettings = defineStore('jotsauceSettings', () => {
  const settings = ref<Partial<SettingsInterface>>();

  function setSettings(newSettings: Partial<SettingsInterface>) {
    settings.value = newSettings;
  }

  return {
    settings,
    setSettings,
  } as const;
});
