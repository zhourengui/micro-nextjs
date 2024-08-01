// package: microfeproto
// file: globally_shared.proto

import * as jspb from "google-protobuf";

export class GlobalShared extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GlobalShared.AsObject;
  static toObject(includeInstance: boolean, msg: GlobalShared): GlobalShared.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GlobalShared, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GlobalShared;
  static deserializeBinaryFromReader(message: GlobalShared, reader: jspb.BinaryReader): GlobalShared;
}

export namespace GlobalShared {
  export type AsObject = {
  }
}

