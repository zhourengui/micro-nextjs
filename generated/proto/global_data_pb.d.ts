// package: microfeproto
// file: global_data.proto

import * as jspb from "google-protobuf";

export class GlobalData extends jspb.Message {
  getCounter(): number;
  setCounter(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GlobalData.AsObject;
  static toObject(includeInstance: boolean, msg: GlobalData): GlobalData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GlobalData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GlobalData;
  static deserializeBinaryFromReader(message: GlobalData, reader: jspb.BinaryReader): GlobalData;
}

export namespace GlobalData {
  export type AsObject = {
    counter: number,
  }
}

