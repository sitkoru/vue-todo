/**
 * @fileoverview gRPC-Web generated client stub for justdoit
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as justdoit_pb from './justdoit_pb';


export class JustDoItClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoAddIssue = new grpcWeb.AbstractClientBase.MethodInfo(
    justdoit_pb.Task,
    (request: justdoit_pb.TaskName) => {
      return request.serializeBinary();
    },
    justdoit_pb.Task.deserializeBinary
  );

  addIssue(
    request: justdoit_pb.TaskName,
    metadata: grpcWeb.Metadata | null): Promise<justdoit_pb.Task>;

  addIssue(
    request: justdoit_pb.TaskName,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: justdoit_pb.Task) => void): grpcWeb.ClientReadableStream<justdoit_pb.Task>;

  addIssue(
    request: justdoit_pb.TaskName,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: justdoit_pb.Task) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/justdoit.JustDoIt/AddIssue',
        request,
        metadata || {},
        this.methodInfoAddIssue,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/justdoit.JustDoIt/AddIssue',
    request,
    metadata || {},
    this.methodInfoAddIssue);
  }

}

