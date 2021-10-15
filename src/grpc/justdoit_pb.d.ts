import * as jspb from 'google-protobuf'



export class TaskId extends jspb.Message {
  getId(): number;
  setId(value: number): TaskId;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskId.AsObject;
  static toObject(includeInstance: boolean, msg: TaskId): TaskId.AsObject;
  static serializeBinaryToWriter(message: TaskId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskId;
  static deserializeBinaryFromReader(message: TaskId, reader: jspb.BinaryReader): TaskId;
}

export namespace TaskId {
  export type AsObject = {
    id: number,
  }
}

export class Result extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): Result;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Result.AsObject;
  static toObject(includeInstance: boolean, msg: Result): Result.AsObject;
  static serializeBinaryToWriter(message: Result, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Result;
  static deserializeBinaryFromReader(message: Result, reader: jspb.BinaryReader): Result;
}

export namespace Result {
  export type AsObject = {
    result: boolean,
  }
}

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

