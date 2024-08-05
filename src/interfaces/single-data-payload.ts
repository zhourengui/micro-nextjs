import { MicroAppCommunicationChannel } from "@/generated/proto/element_pb";

export interface SingleDataPayload {
  channel: MicroAppCommunicationChannel;
  payload: Record<PropertyKey, unknown>;
  appName?: string;
}
