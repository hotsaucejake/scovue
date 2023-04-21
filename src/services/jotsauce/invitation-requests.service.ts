import type { InvitationRequestDto } from '@/services/jotsauce/interfaces/invitation-requests/invitation-request.dto';
import type { ServiceResponse } from '@/services/jotsauce/interfaces/service-response.interface';
import type { InvitationRequestResponse } from '@/services/jotsauce/interfaces/invitation-requests/invitation-request.response';
import { postAsync } from '@/composables/useJotSauceApi';

const baseUrl: string = 'api/invitationRequests';

export async function storeInvitationRequest(invitationRequest: InvitationRequestDto): Promise<ServiceResponse<InvitationRequestResponse>> {
  return await postAsync<InvitationRequestResponse>(baseUrl, invitationRequest);
}
