import * as jspb from 'google-protobuf'



export class TaskName extends jspb.Message {
  getName(): string;
  setName(value: string): TaskName;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskName.AsObject;
  static toObject(includeInstance: boolean, msg: TaskName): TaskName.AsObject;
  static serializeBinaryToWriter(message: TaskName, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskName;
  static deserializeBinaryFromReader(message: TaskName, reader: jspb.BinaryReader): TaskName;
}

export namespace TaskName {
  export type AsObject = {
    name: string,
  }
}

export class Task extends jspb.Message {
  getId(): number;
  setId(value: number): Task;

  getName(): string;
  setName(value: string): Task;

  getChecked(): boolean;
  setChecked(value: boolean): Task;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Task.AsObject;
  static toObject(includeInstance: boolean, msg: Task): Task.AsObject;
  static serializeBinaryToWriter(message: Task, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Task;
  static deserializeBinaryFromReader(message: Task, reader: jspb.BinaryReader): Task;
}

export namespace Task {
  export type AsObject = {
    id: number,
    name: string,
    checked: boolean,
  }
}

