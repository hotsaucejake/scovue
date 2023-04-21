export interface InvitationRequestResponse {
  email: string;
  message?: string;

  created_at(): Date;
}
