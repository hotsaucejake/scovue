import type { ServiceResponse } from '@/services/jotsauce/interfaces/service-response.interface';
import { getAsync } from '@/composables/useJotSauceApi';
import type { SettingsInterface } from '@/services/jotsauce/interfaces/settings/settings.interface';

export async function getSettings(): Promise<ServiceResponse<SettingsInterface>> {
  return await getAsync<SettingsInterface>('api/settings');
}
