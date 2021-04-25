/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */





declare global {
  interface NexusGenCustomOutputProperties<TypeName extends string> {
    crud: NexusPrisma<TypeName, 'crud'>
    model: NexusPrisma<TypeName, 'model'>
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  DateTimeFieldUpdateOperationsInput: { // input type
    set?: NexusGenScalars['DateTime'] | null; // DateTime
  }
  DateTimeFilter: { // input type
    equals?: NexusGenScalars['DateTime'] | null; // DateTime
    gt?: NexusGenScalars['DateTime'] | null; // DateTime
    gte?: NexusGenScalars['DateTime'] | null; // DateTime
    in?: NexusGenScalars['DateTime'][] | null; // [DateTime!]
    lt?: NexusGenScalars['DateTime'] | null; // DateTime
    lte?: NexusGenScalars['DateTime'] | null; // DateTime
    not?: NexusGenInputs['NestedDateTimeFilter'] | null; // NestedDateTimeFilter
    notIn?: NexusGenScalars['DateTime'][] | null; // [DateTime!]
  }
  IntFilter: { // input type
    equals?: number | null; // Int
    gt?: number | null; // Int
    gte?: number | null; // Int
    in?: number[] | null; // [Int!]
    lt?: number | null; // Int
    lte?: number | null; // Int
    not?: NexusGenInputs['NestedIntFilter'] | null; // NestedIntFilter
    notIn?: number[] | null; // [Int!]
  }
  NestedDateTimeFilter: { // input type
    equals?: NexusGenScalars['DateTime'] | null; // DateTime
    gt?: NexusGenScalars['DateTime'] | null; // DateTime
    gte?: NexusGenScalars['DateTime'] | null; // DateTime
    in?: NexusGenScalars['DateTime'][] | null; // [DateTime!]
    lt?: NexusGenScalars['DateTime'] | null; // DateTime
    lte?: NexusGenScalars['DateTime'] | null; // DateTime
    not?: NexusGenInputs['NestedDateTimeFilter'] | null; // NestedDateTimeFilter
    notIn?: NexusGenScalars['DateTime'][] | null; // [DateTime!]
  }
  NestedIntFilter: { // input type
    equals?: number | null; // Int
    gt?: number | null; // Int
    gte?: number | null; // Int
    in?: number[] | null; // [Int!]
    lt?: number | null; // Int
    lte?: number | null; // Int
    not?: NexusGenInputs['NestedIntFilter'] | null; // NestedIntFilter
    notIn?: number[] | null; // [Int!]
  }
  NestedStringFilter: { // input type
    contains?: string | null; // String
    endsWith?: string | null; // String
    equals?: string | null; // String
    gt?: string | null; // String
    gte?: string | null; // String
    in?: string[] | null; // [String!]
    lt?: string | null; // String
    lte?: string | null; // String
    not?: NexusGenInputs['NestedStringFilter'] | null; // NestedStringFilter
    notIn?: string[] | null; // [String!]
    startsWith?: string | null; // String
  }
  NestedStringNullableFilter: { // input type
    contains?: string | null; // String
    endsWith?: string | null; // String
    equals?: string | null; // String
    gt?: string | null; // String
    gte?: string | null; // String
    in?: string[] | null; // [String!]
    lt?: string | null; // String
    lte?: string | null; // String
    not?: NexusGenInputs['NestedStringNullableFilter'] | null; // NestedStringNullableFilter
    notIn?: string[] | null; // [String!]
    startsWith?: string | null; // String
  }
  NullableStringFieldUpdateOperationsInput: { // input type
    set?: string | null; // String
  }
  StringFieldUpdateOperationsInput: { // input type
    set?: string | null; // String
  }
  StringFilter: { // input type
    contains?: string | null; // String
    endsWith?: string | null; // String
    equals?: string | null; // String
    gt?: string | null; // String
    gte?: string | null; // String
    in?: string[] | null; // [String!]
    lt?: string | null; // String
    lte?: string | null; // String
    mode?: NexusGenEnums['QueryMode'] | null; // QueryMode
    not?: NexusGenInputs['NestedStringFilter'] | null; // NestedStringFilter
    notIn?: string[] | null; // [String!]
    startsWith?: string | null; // String
  }
  StringNullableFilter: { // input type
    contains?: string | null; // String
    endsWith?: string | null; // String
    equals?: string | null; // String
    gt?: string | null; // String
    gte?: string | null; // String
    in?: string[] | null; // [String!]
    lt?: string | null; // String
    lte?: string | null; // String
    mode?: NexusGenEnums['QueryMode'] | null; // QueryMode
    not?: NexusGenInputs['NestedStringNullableFilter'] | null; // NestedStringNullableFilter
    notIn?: string[] | null; // [String!]
    startsWith?: string | null; // String
  }
  TaskCreateInput: { // input type
    createdAt?: NexusGenScalars['DateTime'] | null; // DateTime
    description?: string | null; // String
    name: string; // String!
    todo: NexusGenInputs['TodoCreateNestedOneWithoutTasksInput']; // TodoCreateNestedOneWithoutTasksInput!
    updatedAt?: NexusGenScalars['DateTime'] | null; // DateTime
  }
  TaskCreateManyTodoInput: { // input type
    createdAt?: NexusGenScalars['DateTime'] | null; // DateTime
    description?: string | null; // String
    id?: number | null; // Int
    name: string; // String!
    updatedAt?: NexusGenScalars['DateTime'] | null; // DateTime
  }
  TaskCreateManyTodoInputEnvelope: { // input type
    data?: NexusGenInputs['TaskCreateManyTodoInput'][] | null; // [TaskCreateManyTodoInput!]
    skipDuplicates?: boolean | null; // Boolean
  }
  TaskCreateNestedManyWithoutTodoInput: { // input type
    connect?: NexusGenInputs['TaskWhereUniqueInput'][] | null; // [TaskWhereUniqueInput!]
    connectOrCreate?: NexusGenInputs['TaskCreateOrConnectWithoutTodoInput'][] | null; // [TaskCreateOrConnectWithoutTodoInput!]
    create?: NexusGenInputs['TaskCreateWithoutTodoInput'][] | null; // [TaskCreateWithoutTodoInput!]
    createMany?: NexusGenInputs['TaskCreateManyTodoInputEnvelope'] | null; // TaskCreateManyTodoInputEnvelope
  }
  TaskCreateOrConnectWithoutTodoInput: { // input type
    create: NexusGenInputs['TaskCreateWithoutTodoInput']; // TaskCreateWithoutTodoInput!
    where: NexusGenInputs['TaskWhereUniqueInput']; // TaskWhereUniqueInput!
  }
  TaskCreateWithoutTodoInput: { // input type
    createdAt?: NexusGenScalars['DateTime'] | null; // DateTime
    description?: string | null; // String
    name: string; // String!
    updatedAt?: NexusGenScalars['DateTime'] | null; // DateTime
  }
  TaskListRelationFilter: { // input type
    every?: NexusGenInputs['TaskWhereInput'] | null; // TaskWhereInput
    none?: NexusGenInputs['TaskWhereInput'] | null; // TaskWhereInput
    some?: NexusGenInputs['TaskWhereInput'] | null; // TaskWhereInput
  }
  TaskScalarWhereInput: { // input type
    AND?: NexusGenInputs['TaskScalarWhereInput'][] | null; // [TaskScalarWhereInput!]
    NOT?: NexusGenInputs['TaskScalarWhereInput'][] | null; // [TaskScalarWhereInput!]
    OR?: NexusGenInputs['TaskScalarWhereInput'][] | null; // [TaskScalarWhereInput!]
    createdAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
    description?: NexusGenInputs['StringNullableFilter'] | null; // StringNullableFilter
    id?: NexusGenInputs['IntFilter'] | null; // IntFilter
    name?: NexusGenInputs['StringFilter'] | null; // StringFilter
    todoId?: NexusGenInputs['IntFilter'] | null; // IntFilter
    updatedAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
  }
  TaskUpdateManyMutationInput: { // input type
    createdAt?: NexusGenInputs['DateTimeFieldUpdateOperationsInput'] | null; // DateTimeFieldUpdateOperationsInput
    description?: NexusGenInputs['NullableStringFieldUpdateOperationsInput'] | null; // NullableStringFieldUpdateOperationsInput
    name?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    updatedAt?: NexusGenInputs['DateTimeFieldUpdateOperationsInput'] | null; // DateTimeFieldUpdateOperationsInput
  }
  TaskUpdateManyWithWhereWithoutTodoInput: { // input type
    data: NexusGenInputs['TaskUpdateManyMutationInput']; // TaskUpdateManyMutationInput!
    where: NexusGenInputs['TaskScalarWhereInput']; // TaskScalarWhereInput!
  }
  TaskUpdateManyWithoutTodoInput: { // input type
    connect?: NexusGenInputs['TaskWhereUniqueInput'][] | null; // [TaskWhereUniqueInput!]
    connectOrCreate?: NexusGenInputs['TaskCreateOrConnectWithoutTodoInput'][] | null; // [TaskCreateOrConnectWithoutTodoInput!]
    create?: NexusGenInputs['TaskCreateWithoutTodoInput'][] | null; // [TaskCreateWithoutTodoInput!]
    createMany?: NexusGenInputs['TaskCreateManyTodoInputEnvelope'] | null; // TaskCreateManyTodoInputEnvelope
    delete?: NexusGenInputs['TaskWhereUniqueInput'][] | null; // [TaskWhereUniqueInput!]
    deleteMany?: NexusGenInputs['TaskScalarWhereInput'][] | null; // [TaskScalarWhereInput!]
    disconnect?: NexusGenInputs['TaskWhereUniqueInput'][] | null; // [TaskWhereUniqueInput!]
    set?: NexusGenInputs['TaskWhereUniqueInput'][] | null; // [TaskWhereUniqueInput!]
    update?: NexusGenInputs['TaskUpdateWithWhereUniqueWithoutTodoInput'][] | null; // [TaskUpdateWithWhereUniqueWithoutTodoInput!]
    updateMany?: NexusGenInputs['TaskUpdateManyWithWhereWithoutTodoInput'][] | null; // [TaskUpdateManyWithWhereWithoutTodoInput!]
    upsert?: NexusGenInputs['TaskUpsertWithWhereUniqueWithoutTodoInput'][] | null; // [TaskUpsertWithWhereUniqueWithoutTodoInput!]
  }
  TaskUpdateWithWhereUniqueWithoutTodoInput: { // input type
    data: NexusGenInputs['TaskUpdateWithoutTodoInput']; // TaskUpdateWithoutTodoInput!
    where: NexusGenInputs['TaskWhereUniqueInput']; // TaskWhereUniqueInput!
  }
  TaskUpdateWithoutTodoInput: { // input type
    createdAt?: NexusGenInputs['DateTimeFieldUpdateOperationsInput'] | null; // DateTimeFieldUpdateOperationsInput
    description?: NexusGenInputs['NullableStringFieldUpdateOperationsInput'] | null; // NullableStringFieldUpdateOperationsInput
    name?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    updatedAt?: NexusGenInputs['DateTimeFieldUpdateOperationsInput'] | null; // DateTimeFieldUpdateOperationsInput
  }
  TaskUpsertWithWhereUniqueWithoutTodoInput: { // input type
    create: NexusGenInputs['TaskCreateWithoutTodoInput']; // TaskCreateWithoutTodoInput!
    update: NexusGenInputs['TaskUpdateWithoutTodoInput']; // TaskUpdateWithoutTodoInput!
    where: NexusGenInputs['TaskWhereUniqueInput']; // TaskWhereUniqueInput!
  }
  TaskWhereInput: { // input type
    AND?: NexusGenInputs['TaskWhereInput'][] | null; // [TaskWhereInput!]
    NOT?: NexusGenInputs['TaskWhereInput'][] | null; // [TaskWhereInput!]
    OR?: NexusGenInputs['TaskWhereInput'][] | null; // [TaskWhereInput!]
    createdAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
    description?: NexusGenInputs['StringNullableFilter'] | null; // StringNullableFilter
    id?: NexusGenInputs['IntFilter'] | null; // IntFilter
    name?: NexusGenInputs['StringFilter'] | null; // StringFilter
    todo?: NexusGenInputs['TodoWhereInput'] | null; // TodoWhereInput
    todoId?: NexusGenInputs['IntFilter'] | null; // IntFilter
    updatedAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
  }
  TaskWhereUniqueInput: { // input type
    id?: number | null; // Int
  }
  TodoCreateInput: { // input type
    createdAt?: NexusGenScalars['DateTime'] | null; // DateTime
    description?: string | null; // String
    tasks?: NexusGenInputs['TaskCreateNestedManyWithoutTodoInput'] | null; // TaskCreateNestedManyWithoutTodoInput
    title: string; // String!
    updatedAt?: NexusGenScalars['DateTime'] | null; // DateTime
  }
  TodoCreateNestedOneWithoutTasksInput: { // input type
    connect?: NexusGenInputs['TodoWhereUniqueInput'] | null; // TodoWhereUniqueInput
    connectOrCreate?: NexusGenInputs['TodoCreateOrConnectWithoutTasksInput'] | null; // TodoCreateOrConnectWithoutTasksInput
    create?: NexusGenInputs['TodoCreateWithoutTasksInput'] | null; // TodoCreateWithoutTasksInput
  }
  TodoCreateOrConnectWithoutTasksInput: { // input type
    create: NexusGenInputs['TodoCreateWithoutTasksInput']; // TodoCreateWithoutTasksInput!
    where: NexusGenInputs['TodoWhereUniqueInput']; // TodoWhereUniqueInput!
  }
  TodoCreateWithoutTasksInput: { // input type
    createdAt?: NexusGenScalars['DateTime'] | null; // DateTime
    description?: string | null; // String
    title: string; // String!
    updatedAt?: NexusGenScalars['DateTime'] | null; // DateTime
  }
  TodoUpdateInput: { // input type
    createdAt?: NexusGenInputs['DateTimeFieldUpdateOperationsInput'] | null; // DateTimeFieldUpdateOperationsInput
    description?: NexusGenInputs['NullableStringFieldUpdateOperationsInput'] | null; // NullableStringFieldUpdateOperationsInput
    tasks?: NexusGenInputs['TaskUpdateManyWithoutTodoInput'] | null; // TaskUpdateManyWithoutTodoInput
    title?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    updatedAt?: NexusGenInputs['DateTimeFieldUpdateOperationsInput'] | null; // DateTimeFieldUpdateOperationsInput
  }
  TodoWhereInput: { // input type
    AND?: NexusGenInputs['TodoWhereInput'][] | null; // [TodoWhereInput!]
    NOT?: NexusGenInputs['TodoWhereInput'][] | null; // [TodoWhereInput!]
    OR?: NexusGenInputs['TodoWhereInput'][] | null; // [TodoWhereInput!]
    createdAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
    description?: NexusGenInputs['StringNullableFilter'] | null; // StringNullableFilter
    id?: NexusGenInputs['IntFilter'] | null; // IntFilter
    tasks?: NexusGenInputs['TaskListRelationFilter'] | null; // TaskListRelationFilter
    title?: NexusGenInputs['StringFilter'] | null; // StringFilter
    updatedAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
  }
  TodoWhereUniqueInput: { // input type
    id?: number | null; // Int
  }
}

export interface NexusGenEnums {
  OperationsTypeEnum: "DELETE" | "INSERT" | "UPDATE"
  QueryMode: "default" | "insensitive"
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  DateTime: any
}

export interface NexusGenObjects {
  AffectedRowsOutput: { // root type
    count: number; // Int!
  }
  Mutation: {};
  Query: {};
  Subscription: {};
  Task: { // root type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    description?: string | null; // String
    id: number; // Int!
    name: string; // String!
    todoId: number; // Int!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
  }
  Todo: { // root type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    description?: string | null; // String
    id: number; // Int!
    title: string; // String!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
  }
  TodoSubscriptionType: { // root type
    new?: NexusGenRootTypes['Todo'] | null; // Todo
    old?: NexusGenRootTypes['Todo'] | null; // Todo
    operation?: NexusGenEnums['OperationsTypeEnum'] | null; // OperationsTypeEnum
    table?: string | null; // String
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars & NexusGenEnums

export interface NexusGenFieldTypes {
  AffectedRowsOutput: { // field return type
    count: number; // Int!
  }
  Mutation: { // field return type
    createOneTask: NexusGenRootTypes['Task']; // Task!
    createOneTodo: NexusGenRootTypes['Todo']; // Todo!
    deleteOneTodo: NexusGenRootTypes['Todo'] | null; // Todo
    updateManyTask: NexusGenRootTypes['AffectedRowsOutput']; // AffectedRowsOutput!
    updateOneTodo: NexusGenRootTypes['Todo'] | null; // Todo
  }
  Query: { // field return type
    todo: NexusGenRootTypes['Todo'] | null; // Todo
    todos: NexusGenRootTypes['Todo'][]; // [Todo!]!
  }
  Subscription: { // field return type
    todoSubscription: NexusGenRootTypes['TodoSubscriptionType'] | null; // TodoSubscriptionType
  }
  Task: { // field return type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    description: string | null; // String
    id: number; // Int!
    name: string; // String!
    todo: NexusGenRootTypes['Todo']; // Todo!
    todoId: number; // Int!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
  }
  Todo: { // field return type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    description: string | null; // String
    id: number; // Int!
    tasks: NexusGenRootTypes['Task'][]; // [Task!]!
    title: string; // String!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
  }
  TodoSubscriptionType: { // field return type
    new: NexusGenRootTypes['Todo'] | null; // Todo
    old: NexusGenRootTypes['Todo'] | null; // Todo
    operation: NexusGenEnums['OperationsTypeEnum'] | null; // OperationsTypeEnum
    table: string | null; // String
  }
}

export interface NexusGenFieldTypeNames {
  AffectedRowsOutput: { // field return type name
    count: 'Int'
  }
  Mutation: { // field return type name
    createOneTask: 'Task'
    createOneTodo: 'Todo'
    deleteOneTodo: 'Todo'
    updateManyTask: 'AffectedRowsOutput'
    updateOneTodo: 'Todo'
  }
  Query: { // field return type name
    todo: 'Todo'
    todos: 'Todo'
  }
  Subscription: { // field return type name
    todoSubscription: 'TodoSubscriptionType'
  }
  Task: { // field return type name
    createdAt: 'DateTime'
    description: 'String'
    id: 'Int'
    name: 'String'
    todo: 'Todo'
    todoId: 'Int'
    updatedAt: 'DateTime'
  }
  Todo: { // field return type name
    createdAt: 'DateTime'
    description: 'String'
    id: 'Int'
    tasks: 'Task'
    title: 'String'
    updatedAt: 'DateTime'
  }
  TodoSubscriptionType: { // field return type name
    new: 'Todo'
    old: 'Todo'
    operation: 'OperationsTypeEnum'
    table: 'String'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createOneTask: { // args
      data: NexusGenInputs['TaskCreateInput']; // TaskCreateInput!
    }
    createOneTodo: { // args
      data: NexusGenInputs['TodoCreateInput']; // TodoCreateInput!
    }
    deleteOneTodo: { // args
      where: NexusGenInputs['TodoWhereUniqueInput']; // TodoWhereUniqueInput!
    }
    updateManyTask: { // args
      data: NexusGenInputs['TaskUpdateManyMutationInput']; // TaskUpdateManyMutationInput!
      where?: NexusGenInputs['TaskWhereInput'] | null; // TaskWhereInput
    }
    updateOneTodo: { // args
      data: NexusGenInputs['TodoUpdateInput']; // TodoUpdateInput!
      where: NexusGenInputs['TodoWhereUniqueInput']; // TodoWhereUniqueInput!
    }
  }
  Query: {
    todo: { // args
      where: NexusGenInputs['TodoWhereUniqueInput']; // TodoWhereUniqueInput!
    }
    todos: { // args
      after?: NexusGenInputs['TodoWhereUniqueInput'] | null; // TodoWhereUniqueInput
      before?: NexusGenInputs['TodoWhereUniqueInput'] | null; // TodoWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
      where?: NexusGenInputs['TodoWhereInput'] | null; // TodoWhereInput
    }
  }
  Todo: {
    tasks: { // args
      after?: NexusGenInputs['TaskWhereUniqueInput'] | null; // TaskWhereUniqueInput
      before?: NexusGenInputs['TaskWhereUniqueInput'] | null; // TaskWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = keyof NexusGenEnums;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}