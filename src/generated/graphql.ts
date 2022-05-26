import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** comments */
export type Comment = {
  __typename?: 'comment';
  comment: Scalars['String'];
  commentator: Scalars['Int'];
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  /** An object relationship */
  parent_comment?: Maybe<Comment>;
  /** An object relationship */
  post?: Maybe<Post>;
  post_id?: Maybe<Scalars['Int']>;
  /** An array relationship */
  replies: Array<Comment>;
  /** An aggregate relationship */
  replies_aggregate: Comment_Aggregate;
  reply_to_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  /** An array relationship */
  upvotes: Array<Upvote>;
  /** An aggregate relationship */
  upvotes_aggregate: Upvote_Aggregate;
  /** An object relationship */
  user: User;
};


/** comments */
export type CommentRepliesArgs = {
  distinct_on?: InputMaybe<Array<Comment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Comment_Order_By>>;
  where?: InputMaybe<Comment_Bool_Exp>;
};


/** comments */
export type CommentReplies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Comment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Comment_Order_By>>;
  where?: InputMaybe<Comment_Bool_Exp>;
};


/** comments */
export type CommentUpvotesArgs = {
  distinct_on?: InputMaybe<Array<Upvote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Upvote_Order_By>>;
  where?: InputMaybe<Upvote_Bool_Exp>;
};


/** comments */
export type CommentUpvotes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Upvote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Upvote_Order_By>>;
  where?: InputMaybe<Upvote_Bool_Exp>;
};

/** aggregated selection of "comment" */
export type Comment_Aggregate = {
  __typename?: 'comment_aggregate';
  aggregate?: Maybe<Comment_Aggregate_Fields>;
  nodes: Array<Comment>;
};

/** aggregate fields of "comment" */
export type Comment_Aggregate_Fields = {
  __typename?: 'comment_aggregate_fields';
  avg?: Maybe<Comment_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Comment_Max_Fields>;
  min?: Maybe<Comment_Min_Fields>;
  stddev?: Maybe<Comment_Stddev_Fields>;
  stddev_pop?: Maybe<Comment_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Comment_Stddev_Samp_Fields>;
  sum?: Maybe<Comment_Sum_Fields>;
  var_pop?: Maybe<Comment_Var_Pop_Fields>;
  var_samp?: Maybe<Comment_Var_Samp_Fields>;
  variance?: Maybe<Comment_Variance_Fields>;
};


/** aggregate fields of "comment" */
export type Comment_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Comment_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "comment" */
export type Comment_Aggregate_Order_By = {
  avg?: InputMaybe<Comment_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Comment_Max_Order_By>;
  min?: InputMaybe<Comment_Min_Order_By>;
  stddev?: InputMaybe<Comment_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Comment_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Comment_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Comment_Sum_Order_By>;
  var_pop?: InputMaybe<Comment_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Comment_Var_Samp_Order_By>;
  variance?: InputMaybe<Comment_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "comment" */
export type Comment_Arr_Rel_Insert_Input = {
  data: Array<Comment_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Comment_On_Conflict>;
};

/** aggregate avg on columns */
export type Comment_Avg_Fields = {
  __typename?: 'comment_avg_fields';
  commentator?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
  reply_to_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "comment" */
export type Comment_Avg_Order_By = {
  commentator?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
  reply_to_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "comment". All fields are combined with a logical 'AND'. */
export type Comment_Bool_Exp = {
  _and?: InputMaybe<Array<Comment_Bool_Exp>>;
  _not?: InputMaybe<Comment_Bool_Exp>;
  _or?: InputMaybe<Array<Comment_Bool_Exp>>;
  comment?: InputMaybe<String_Comparison_Exp>;
  commentator?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  parent_comment?: InputMaybe<Comment_Bool_Exp>;
  post?: InputMaybe<Post_Bool_Exp>;
  post_id?: InputMaybe<Int_Comparison_Exp>;
  replies?: InputMaybe<Comment_Bool_Exp>;
  reply_to_id?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  upvotes?: InputMaybe<Upvote_Bool_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
};

/** unique or primary key constraints on table "comment" */
export enum Comment_Constraint {
  /** unique or primary key constraint */
  CommentPkey = 'comment_pkey'
}

/** input type for incrementing numeric columns in table "comment" */
export type Comment_Inc_Input = {
  commentator?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  post_id?: InputMaybe<Scalars['Int']>;
  reply_to_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "comment" */
export type Comment_Insert_Input = {
  comment?: InputMaybe<Scalars['String']>;
  commentator?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  parent_comment?: InputMaybe<Comment_Obj_Rel_Insert_Input>;
  post?: InputMaybe<Post_Obj_Rel_Insert_Input>;
  post_id?: InputMaybe<Scalars['Int']>;
  replies?: InputMaybe<Comment_Arr_Rel_Insert_Input>;
  reply_to_id?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  upvotes?: InputMaybe<Upvote_Arr_Rel_Insert_Input>;
  user?: InputMaybe<User_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Comment_Max_Fields = {
  __typename?: 'comment_max_fields';
  comment?: Maybe<Scalars['String']>;
  commentator?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
  reply_to_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "comment" */
export type Comment_Max_Order_By = {
  comment?: InputMaybe<Order_By>;
  commentator?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
  reply_to_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Comment_Min_Fields = {
  __typename?: 'comment_min_fields';
  comment?: Maybe<Scalars['String']>;
  commentator?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
  reply_to_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "comment" */
export type Comment_Min_Order_By = {
  comment?: InputMaybe<Order_By>;
  commentator?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
  reply_to_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "comment" */
export type Comment_Mutation_Response = {
  __typename?: 'comment_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Comment>;
};

/** input type for inserting object relation for remote table "comment" */
export type Comment_Obj_Rel_Insert_Input = {
  data: Comment_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Comment_On_Conflict>;
};

/** on_conflict condition type for table "comment" */
export type Comment_On_Conflict = {
  constraint: Comment_Constraint;
  update_columns?: Array<Comment_Update_Column>;
  where?: InputMaybe<Comment_Bool_Exp>;
};

/** Ordering options when selecting data from "comment". */
export type Comment_Order_By = {
  comment?: InputMaybe<Order_By>;
  commentator?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  parent_comment?: InputMaybe<Comment_Order_By>;
  post?: InputMaybe<Post_Order_By>;
  post_id?: InputMaybe<Order_By>;
  replies_aggregate?: InputMaybe<Comment_Aggregate_Order_By>;
  reply_to_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  upvotes_aggregate?: InputMaybe<Upvote_Aggregate_Order_By>;
  user?: InputMaybe<User_Order_By>;
};

/** primary key columns input for table: comment */
export type Comment_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "comment" */
export enum Comment_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Commentator = 'commentator',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PostId = 'post_id',
  /** column name */
  ReplyToId = 'reply_to_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "comment" */
export type Comment_Set_Input = {
  comment?: InputMaybe<Scalars['String']>;
  commentator?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  post_id?: InputMaybe<Scalars['Int']>;
  reply_to_id?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Comment_Stddev_Fields = {
  __typename?: 'comment_stddev_fields';
  commentator?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
  reply_to_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "comment" */
export type Comment_Stddev_Order_By = {
  commentator?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
  reply_to_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Comment_Stddev_Pop_Fields = {
  __typename?: 'comment_stddev_pop_fields';
  commentator?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
  reply_to_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "comment" */
export type Comment_Stddev_Pop_Order_By = {
  commentator?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
  reply_to_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Comment_Stddev_Samp_Fields = {
  __typename?: 'comment_stddev_samp_fields';
  commentator?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
  reply_to_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "comment" */
export type Comment_Stddev_Samp_Order_By = {
  commentator?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
  reply_to_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Comment_Sum_Fields = {
  __typename?: 'comment_sum_fields';
  commentator?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
  reply_to_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "comment" */
export type Comment_Sum_Order_By = {
  commentator?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
  reply_to_id?: InputMaybe<Order_By>;
};

/** update columns of table "comment" */
export enum Comment_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Commentator = 'commentator',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PostId = 'post_id',
  /** column name */
  ReplyToId = 'reply_to_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Comment_Var_Pop_Fields = {
  __typename?: 'comment_var_pop_fields';
  commentator?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
  reply_to_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "comment" */
export type Comment_Var_Pop_Order_By = {
  commentator?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
  reply_to_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Comment_Var_Samp_Fields = {
  __typename?: 'comment_var_samp_fields';
  commentator?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
  reply_to_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "comment" */
export type Comment_Var_Samp_Order_By = {
  commentator?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
  reply_to_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Comment_Variance_Fields = {
  __typename?: 'comment_variance_fields';
  commentator?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
  reply_to_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "comment" */
export type Comment_Variance_Order_By = {
  commentator?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
  reply_to_id?: InputMaybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "comment" */
  delete_comment?: Maybe<Comment_Mutation_Response>;
  /** delete single row from the table: "comment" */
  delete_comment_by_pk?: Maybe<Comment>;
  /** delete data from the table: "post" */
  delete_post?: Maybe<Post_Mutation_Response>;
  /** delete single row from the table: "post" */
  delete_post_by_pk?: Maybe<Post>;
  /** delete data from the table: "upvote" */
  delete_upvote?: Maybe<Upvote_Mutation_Response>;
  /** delete single row from the table: "upvote" */
  delete_upvote_by_pk?: Maybe<Upvote>;
  /** delete data from the table: "user" */
  delete_user?: Maybe<User_Mutation_Response>;
  /** delete single row from the table: "user" */
  delete_user_by_pk?: Maybe<User>;
  /** insert data into the table: "comment" */
  insert_comment?: Maybe<Comment_Mutation_Response>;
  /** insert a single row into the table: "comment" */
  insert_comment_one?: Maybe<Comment>;
  /** insert data into the table: "post" */
  insert_post?: Maybe<Post_Mutation_Response>;
  /** insert a single row into the table: "post" */
  insert_post_one?: Maybe<Post>;
  /** insert data into the table: "upvote" */
  insert_upvote?: Maybe<Upvote_Mutation_Response>;
  /** insert a single row into the table: "upvote" */
  insert_upvote_one?: Maybe<Upvote>;
  /** insert data into the table: "user" */
  insert_user?: Maybe<User_Mutation_Response>;
  /** insert a single row into the table: "user" */
  insert_user_one?: Maybe<User>;
  /** update data of the table: "comment" */
  update_comment?: Maybe<Comment_Mutation_Response>;
  /** update single row of the table: "comment" */
  update_comment_by_pk?: Maybe<Comment>;
  /** update data of the table: "post" */
  update_post?: Maybe<Post_Mutation_Response>;
  /** update single row of the table: "post" */
  update_post_by_pk?: Maybe<Post>;
  /** update data of the table: "upvote" */
  update_upvote?: Maybe<Upvote_Mutation_Response>;
  /** update single row of the table: "upvote" */
  update_upvote_by_pk?: Maybe<Upvote>;
  /** update data of the table: "user" */
  update_user?: Maybe<User_Mutation_Response>;
  /** update single row of the table: "user" */
  update_user_by_pk?: Maybe<User>;
};


/** mutation root */
export type Mutation_RootDelete_CommentArgs = {
  where: Comment_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Comment_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_PostArgs = {
  where: Post_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Post_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_UpvoteArgs = {
  where: Upvote_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Upvote_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_CommentArgs = {
  objects: Array<Comment_Insert_Input>;
  on_conflict?: InputMaybe<Comment_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Comment_OneArgs = {
  object: Comment_Insert_Input;
  on_conflict?: InputMaybe<Comment_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PostArgs = {
  objects: Array<Post_Insert_Input>;
  on_conflict?: InputMaybe<Post_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Post_OneArgs = {
  object: Post_Insert_Input;
  on_conflict?: InputMaybe<Post_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UpvoteArgs = {
  objects: Array<Upvote_Insert_Input>;
  on_conflict?: InputMaybe<Upvote_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Upvote_OneArgs = {
  object: Upvote_Insert_Input;
  on_conflict?: InputMaybe<Upvote_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_CommentArgs = {
  _inc?: InputMaybe<Comment_Inc_Input>;
  _set?: InputMaybe<Comment_Set_Input>;
  where: Comment_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Comment_By_PkArgs = {
  _inc?: InputMaybe<Comment_Inc_Input>;
  _set?: InputMaybe<Comment_Set_Input>;
  pk_columns: Comment_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_PostArgs = {
  _inc?: InputMaybe<Post_Inc_Input>;
  _set?: InputMaybe<Post_Set_Input>;
  where: Post_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Post_By_PkArgs = {
  _inc?: InputMaybe<Post_Inc_Input>;
  _set?: InputMaybe<Post_Set_Input>;
  pk_columns: Post_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UpvoteArgs = {
  _inc?: InputMaybe<Upvote_Inc_Input>;
  _set?: InputMaybe<Upvote_Set_Input>;
  where: Upvote_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Upvote_By_PkArgs = {
  _inc?: InputMaybe<Upvote_Inc_Input>;
  _set?: InputMaybe<Upvote_Set_Input>;
  pk_columns: Upvote_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _inc?: InputMaybe<User_Inc_Input>;
  _set?: InputMaybe<User_Set_Input>;
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
  _inc?: InputMaybe<User_Inc_Input>;
  _set?: InputMaybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "post" */
export type Post = {
  __typename?: 'post';
  /** An object relationship */
  author: User;
  author_id: Scalars['Int'];
  /** An array relationship */
  comments: Array<Comment>;
  /** An aggregate relationship */
  comments_aggregate: Comment_Aggregate;
  content: Scalars['String'];
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  title: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "post" */
export type PostCommentsArgs = {
  distinct_on?: InputMaybe<Array<Comment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Comment_Order_By>>;
  where?: InputMaybe<Comment_Bool_Exp>;
};


/** columns and relationships of "post" */
export type PostComments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Comment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Comment_Order_By>>;
  where?: InputMaybe<Comment_Bool_Exp>;
};

/** aggregated selection of "post" */
export type Post_Aggregate = {
  __typename?: 'post_aggregate';
  aggregate?: Maybe<Post_Aggregate_Fields>;
  nodes: Array<Post>;
};

/** aggregate fields of "post" */
export type Post_Aggregate_Fields = {
  __typename?: 'post_aggregate_fields';
  avg?: Maybe<Post_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Post_Max_Fields>;
  min?: Maybe<Post_Min_Fields>;
  stddev?: Maybe<Post_Stddev_Fields>;
  stddev_pop?: Maybe<Post_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Post_Stddev_Samp_Fields>;
  sum?: Maybe<Post_Sum_Fields>;
  var_pop?: Maybe<Post_Var_Pop_Fields>;
  var_samp?: Maybe<Post_Var_Samp_Fields>;
  variance?: Maybe<Post_Variance_Fields>;
};


/** aggregate fields of "post" */
export type Post_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Post_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "post" */
export type Post_Aggregate_Order_By = {
  avg?: InputMaybe<Post_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Post_Max_Order_By>;
  min?: InputMaybe<Post_Min_Order_By>;
  stddev?: InputMaybe<Post_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Post_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Post_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Post_Sum_Order_By>;
  var_pop?: InputMaybe<Post_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Post_Var_Samp_Order_By>;
  variance?: InputMaybe<Post_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "post" */
export type Post_Arr_Rel_Insert_Input = {
  data: Array<Post_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Post_On_Conflict>;
};

/** aggregate avg on columns */
export type Post_Avg_Fields = {
  __typename?: 'post_avg_fields';
  author_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "post" */
export type Post_Avg_Order_By = {
  author_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "post". All fields are combined with a logical 'AND'. */
export type Post_Bool_Exp = {
  _and?: InputMaybe<Array<Post_Bool_Exp>>;
  _not?: InputMaybe<Post_Bool_Exp>;
  _or?: InputMaybe<Array<Post_Bool_Exp>>;
  author?: InputMaybe<User_Bool_Exp>;
  author_id?: InputMaybe<Int_Comparison_Exp>;
  comments?: InputMaybe<Comment_Bool_Exp>;
  content?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "post" */
export enum Post_Constraint {
  /** unique or primary key constraint */
  PostPkey = 'post_pkey'
}

/** input type for incrementing numeric columns in table "post" */
export type Post_Inc_Input = {
  author_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "post" */
export type Post_Insert_Input = {
  author?: InputMaybe<User_Obj_Rel_Insert_Input>;
  author_id?: InputMaybe<Scalars['Int']>;
  comments?: InputMaybe<Comment_Arr_Rel_Insert_Input>;
  content?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Post_Max_Fields = {
  __typename?: 'post_max_fields';
  author_id?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "post" */
export type Post_Max_Order_By = {
  author_id?: InputMaybe<Order_By>;
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Post_Min_Fields = {
  __typename?: 'post_min_fields';
  author_id?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "post" */
export type Post_Min_Order_By = {
  author_id?: InputMaybe<Order_By>;
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "post" */
export type Post_Mutation_Response = {
  __typename?: 'post_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Post>;
};

/** input type for inserting object relation for remote table "post" */
export type Post_Obj_Rel_Insert_Input = {
  data: Post_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Post_On_Conflict>;
};

/** on_conflict condition type for table "post" */
export type Post_On_Conflict = {
  constraint: Post_Constraint;
  update_columns?: Array<Post_Update_Column>;
  where?: InputMaybe<Post_Bool_Exp>;
};

/** Ordering options when selecting data from "post". */
export type Post_Order_By = {
  author?: InputMaybe<User_Order_By>;
  author_id?: InputMaybe<Order_By>;
  comments_aggregate?: InputMaybe<Comment_Aggregate_Order_By>;
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: post */
export type Post_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "post" */
export enum Post_Select_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "post" */
export type Post_Set_Input = {
  author_id?: InputMaybe<Scalars['Int']>;
  content?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Post_Stddev_Fields = {
  __typename?: 'post_stddev_fields';
  author_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "post" */
export type Post_Stddev_Order_By = {
  author_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Post_Stddev_Pop_Fields = {
  __typename?: 'post_stddev_pop_fields';
  author_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "post" */
export type Post_Stddev_Pop_Order_By = {
  author_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Post_Stddev_Samp_Fields = {
  __typename?: 'post_stddev_samp_fields';
  author_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "post" */
export type Post_Stddev_Samp_Order_By = {
  author_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Post_Sum_Fields = {
  __typename?: 'post_sum_fields';
  author_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "post" */
export type Post_Sum_Order_By = {
  author_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** update columns of table "post" */
export enum Post_Update_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Post_Var_Pop_Fields = {
  __typename?: 'post_var_pop_fields';
  author_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "post" */
export type Post_Var_Pop_Order_By = {
  author_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Post_Var_Samp_Fields = {
  __typename?: 'post_var_samp_fields';
  author_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "post" */
export type Post_Var_Samp_Order_By = {
  author_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Post_Variance_Fields = {
  __typename?: 'post_variance_fields';
  author_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "post" */
export type Post_Variance_Order_By = {
  author_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "comment" */
  comment: Array<Comment>;
  /** fetch aggregated fields from the table: "comment" */
  comment_aggregate: Comment_Aggregate;
  /** fetch data from the table: "comment" using primary key columns */
  comment_by_pk?: Maybe<Comment>;
  /** fetch data from the table: "post" */
  post: Array<Post>;
  /** fetch aggregated fields from the table: "post" */
  post_aggregate: Post_Aggregate;
  /** fetch data from the table: "post" using primary key columns */
  post_by_pk?: Maybe<Post>;
  /** fetch data from the table: "upvote" */
  upvote: Array<Upvote>;
  /** fetch aggregated fields from the table: "upvote" */
  upvote_aggregate: Upvote_Aggregate;
  /** fetch data from the table: "upvote" using primary key columns */
  upvote_by_pk?: Maybe<Upvote>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
};


export type Query_RootCommentArgs = {
  distinct_on?: InputMaybe<Array<Comment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Comment_Order_By>>;
  where?: InputMaybe<Comment_Bool_Exp>;
};


export type Query_RootComment_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Comment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Comment_Order_By>>;
  where?: InputMaybe<Comment_Bool_Exp>;
};


export type Query_RootComment_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootPostArgs = {
  distinct_on?: InputMaybe<Array<Post_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Post_Order_By>>;
  where?: InputMaybe<Post_Bool_Exp>;
};


export type Query_RootPost_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Post_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Post_Order_By>>;
  where?: InputMaybe<Post_Bool_Exp>;
};


export type Query_RootPost_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootUpvoteArgs = {
  distinct_on?: InputMaybe<Array<Upvote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Upvote_Order_By>>;
  where?: InputMaybe<Upvote_Bool_Exp>;
};


export type Query_RootUpvote_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Upvote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Upvote_Order_By>>;
  where?: InputMaybe<Upvote_Bool_Exp>;
};


export type Query_RootUpvote_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "comment" */
  comment: Array<Comment>;
  /** fetch aggregated fields from the table: "comment" */
  comment_aggregate: Comment_Aggregate;
  /** fetch data from the table: "comment" using primary key columns */
  comment_by_pk?: Maybe<Comment>;
  /** fetch data from the table: "post" */
  post: Array<Post>;
  /** fetch aggregated fields from the table: "post" */
  post_aggregate: Post_Aggregate;
  /** fetch data from the table: "post" using primary key columns */
  post_by_pk?: Maybe<Post>;
  /** fetch data from the table: "upvote" */
  upvote: Array<Upvote>;
  /** fetch aggregated fields from the table: "upvote" */
  upvote_aggregate: Upvote_Aggregate;
  /** fetch data from the table: "upvote" using primary key columns */
  upvote_by_pk?: Maybe<Upvote>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
};


export type Subscription_RootCommentArgs = {
  distinct_on?: InputMaybe<Array<Comment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Comment_Order_By>>;
  where?: InputMaybe<Comment_Bool_Exp>;
};


export type Subscription_RootComment_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Comment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Comment_Order_By>>;
  where?: InputMaybe<Comment_Bool_Exp>;
};


export type Subscription_RootComment_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootPostArgs = {
  distinct_on?: InputMaybe<Array<Post_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Post_Order_By>>;
  where?: InputMaybe<Post_Bool_Exp>;
};


export type Subscription_RootPost_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Post_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Post_Order_By>>;
  where?: InputMaybe<Post_Bool_Exp>;
};


export type Subscription_RootPost_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootUpvoteArgs = {
  distinct_on?: InputMaybe<Array<Upvote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Upvote_Order_By>>;
  where?: InputMaybe<Upvote_Bool_Exp>;
};


export type Subscription_RootUpvote_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Upvote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Upvote_Order_By>>;
  where?: InputMaybe<Upvote_Bool_Exp>;
};


export type Subscription_RootUpvote_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_By_PkArgs = {
  id: Scalars['Int'];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** upvotes */
export type Upvote = {
  __typename?: 'upvote';
  /** An object relationship */
  commenter: User;
  created_at?: Maybe<Scalars['timestamptz']>;
  id: Scalars['Int'];
  /** An object relationship */
  upvotedComment: Comment;
  upvoted_comment_id: Scalars['Int'];
  upvoter_id: Scalars['Int'];
};

/** aggregated selection of "upvote" */
export type Upvote_Aggregate = {
  __typename?: 'upvote_aggregate';
  aggregate?: Maybe<Upvote_Aggregate_Fields>;
  nodes: Array<Upvote>;
};

/** aggregate fields of "upvote" */
export type Upvote_Aggregate_Fields = {
  __typename?: 'upvote_aggregate_fields';
  avg?: Maybe<Upvote_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Upvote_Max_Fields>;
  min?: Maybe<Upvote_Min_Fields>;
  stddev?: Maybe<Upvote_Stddev_Fields>;
  stddev_pop?: Maybe<Upvote_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Upvote_Stddev_Samp_Fields>;
  sum?: Maybe<Upvote_Sum_Fields>;
  var_pop?: Maybe<Upvote_Var_Pop_Fields>;
  var_samp?: Maybe<Upvote_Var_Samp_Fields>;
  variance?: Maybe<Upvote_Variance_Fields>;
};


/** aggregate fields of "upvote" */
export type Upvote_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Upvote_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "upvote" */
export type Upvote_Aggregate_Order_By = {
  avg?: InputMaybe<Upvote_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Upvote_Max_Order_By>;
  min?: InputMaybe<Upvote_Min_Order_By>;
  stddev?: InputMaybe<Upvote_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Upvote_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Upvote_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Upvote_Sum_Order_By>;
  var_pop?: InputMaybe<Upvote_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Upvote_Var_Samp_Order_By>;
  variance?: InputMaybe<Upvote_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "upvote" */
export type Upvote_Arr_Rel_Insert_Input = {
  data: Array<Upvote_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Upvote_On_Conflict>;
};

/** aggregate avg on columns */
export type Upvote_Avg_Fields = {
  __typename?: 'upvote_avg_fields';
  id?: Maybe<Scalars['Float']>;
  upvoted_comment_id?: Maybe<Scalars['Float']>;
  upvoter_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "upvote" */
export type Upvote_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  upvoted_comment_id?: InputMaybe<Order_By>;
  upvoter_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "upvote". All fields are combined with a logical 'AND'. */
export type Upvote_Bool_Exp = {
  _and?: InputMaybe<Array<Upvote_Bool_Exp>>;
  _not?: InputMaybe<Upvote_Bool_Exp>;
  _or?: InputMaybe<Array<Upvote_Bool_Exp>>;
  commenter?: InputMaybe<User_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  upvotedComment?: InputMaybe<Comment_Bool_Exp>;
  upvoted_comment_id?: InputMaybe<Int_Comparison_Exp>;
  upvoter_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "upvote" */
export enum Upvote_Constraint {
  /** unique or primary key constraint */
  UpvotePkey = 'upvote_pkey',
  /** unique or primary key constraint */
  UpvoteUpvoterIdUpvotedCommentIdKey = 'upvote_upvoter_id_upvoted_comment_id_key'
}

/** input type for incrementing numeric columns in table "upvote" */
export type Upvote_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  upvoted_comment_id?: InputMaybe<Scalars['Int']>;
  upvoter_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "upvote" */
export type Upvote_Insert_Input = {
  commenter?: InputMaybe<User_Obj_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  upvotedComment?: InputMaybe<Comment_Obj_Rel_Insert_Input>;
  upvoted_comment_id?: InputMaybe<Scalars['Int']>;
  upvoter_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Upvote_Max_Fields = {
  __typename?: 'upvote_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  upvoted_comment_id?: Maybe<Scalars['Int']>;
  upvoter_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "upvote" */
export type Upvote_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  upvoted_comment_id?: InputMaybe<Order_By>;
  upvoter_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Upvote_Min_Fields = {
  __typename?: 'upvote_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  upvoted_comment_id?: Maybe<Scalars['Int']>;
  upvoter_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "upvote" */
export type Upvote_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  upvoted_comment_id?: InputMaybe<Order_By>;
  upvoter_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "upvote" */
export type Upvote_Mutation_Response = {
  __typename?: 'upvote_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Upvote>;
};

/** on_conflict condition type for table "upvote" */
export type Upvote_On_Conflict = {
  constraint: Upvote_Constraint;
  update_columns?: Array<Upvote_Update_Column>;
  where?: InputMaybe<Upvote_Bool_Exp>;
};

/** Ordering options when selecting data from "upvote". */
export type Upvote_Order_By = {
  commenter?: InputMaybe<User_Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  upvotedComment?: InputMaybe<Comment_Order_By>;
  upvoted_comment_id?: InputMaybe<Order_By>;
  upvoter_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: upvote */
export type Upvote_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "upvote" */
export enum Upvote_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UpvotedCommentId = 'upvoted_comment_id',
  /** column name */
  UpvoterId = 'upvoter_id'
}

/** input type for updating data in table "upvote" */
export type Upvote_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  upvoted_comment_id?: InputMaybe<Scalars['Int']>;
  upvoter_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Upvote_Stddev_Fields = {
  __typename?: 'upvote_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  upvoted_comment_id?: Maybe<Scalars['Float']>;
  upvoter_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "upvote" */
export type Upvote_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  upvoted_comment_id?: InputMaybe<Order_By>;
  upvoter_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Upvote_Stddev_Pop_Fields = {
  __typename?: 'upvote_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  upvoted_comment_id?: Maybe<Scalars['Float']>;
  upvoter_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "upvote" */
export type Upvote_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  upvoted_comment_id?: InputMaybe<Order_By>;
  upvoter_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Upvote_Stddev_Samp_Fields = {
  __typename?: 'upvote_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  upvoted_comment_id?: Maybe<Scalars['Float']>;
  upvoter_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "upvote" */
export type Upvote_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  upvoted_comment_id?: InputMaybe<Order_By>;
  upvoter_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Upvote_Sum_Fields = {
  __typename?: 'upvote_sum_fields';
  id?: Maybe<Scalars['Int']>;
  upvoted_comment_id?: Maybe<Scalars['Int']>;
  upvoter_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "upvote" */
export type Upvote_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  upvoted_comment_id?: InputMaybe<Order_By>;
  upvoter_id?: InputMaybe<Order_By>;
};

/** update columns of table "upvote" */
export enum Upvote_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UpvotedCommentId = 'upvoted_comment_id',
  /** column name */
  UpvoterId = 'upvoter_id'
}

/** aggregate var_pop on columns */
export type Upvote_Var_Pop_Fields = {
  __typename?: 'upvote_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  upvoted_comment_id?: Maybe<Scalars['Float']>;
  upvoter_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "upvote" */
export type Upvote_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  upvoted_comment_id?: InputMaybe<Order_By>;
  upvoter_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Upvote_Var_Samp_Fields = {
  __typename?: 'upvote_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  upvoted_comment_id?: Maybe<Scalars['Float']>;
  upvoter_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "upvote" */
export type Upvote_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  upvoted_comment_id?: InputMaybe<Order_By>;
  upvoter_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Upvote_Variance_Fields = {
  __typename?: 'upvote_variance_fields';
  id?: Maybe<Scalars['Float']>;
  upvoted_comment_id?: Maybe<Scalars['Float']>;
  upvoter_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "upvote" */
export type Upvote_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  upvoted_comment_id?: InputMaybe<Order_By>;
  upvoter_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "user" */
export type User = {
  __typename?: 'user';
  avatar: Scalars['String'];
  created_at: Scalars['timestamptz'];
  firstname: Scalars['String'];
  id: Scalars['Int'];
  lastname: Scalars['String'];
  /** An array relationship */
  posts: Array<Post>;
  /** An aggregate relationship */
  posts_aggregate: Post_Aggregate;
  updated_at: Scalars['timestamptz'];
  /** An array relationship */
  upvotes: Array<Upvote>;
  /** An aggregate relationship */
  upvotes_aggregate: Upvote_Aggregate;
};


/** columns and relationships of "user" */
export type UserPostsArgs = {
  distinct_on?: InputMaybe<Array<Post_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Post_Order_By>>;
  where?: InputMaybe<Post_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserPosts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Post_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Post_Order_By>>;
  where?: InputMaybe<Post_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserUpvotesArgs = {
  distinct_on?: InputMaybe<Array<Upvote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Upvote_Order_By>>;
  where?: InputMaybe<Upvote_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserUpvotes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Upvote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Upvote_Order_By>>;
  where?: InputMaybe<Upvote_Bool_Exp>;
};

/** aggregated selection of "user" */
export type User_Aggregate = {
  __typename?: 'user_aggregate';
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "user" */
export type User_Aggregate_Fields = {
  __typename?: 'user_aggregate_fields';
  avg?: Maybe<User_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
  stddev?: Maybe<User_Stddev_Fields>;
  stddev_pop?: Maybe<User_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Stddev_Samp_Fields>;
  sum?: Maybe<User_Sum_Fields>;
  var_pop?: Maybe<User_Var_Pop_Fields>;
  var_samp?: Maybe<User_Var_Samp_Fields>;
  variance?: Maybe<User_Variance_Fields>;
};


/** aggregate fields of "user" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type User_Avg_Fields = {
  __typename?: 'user_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: InputMaybe<Array<User_Bool_Exp>>;
  _not?: InputMaybe<User_Bool_Exp>;
  _or?: InputMaybe<Array<User_Bool_Exp>>;
  avatar?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  firstname?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  lastname?: InputMaybe<String_Comparison_Exp>;
  posts?: InputMaybe<Post_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  upvotes?: InputMaybe<Upvote_Bool_Exp>;
};

/** unique or primary key constraints on table "user" */
export enum User_Constraint {
  /** unique or primary key constraint */
  UserPkey = 'user_pkey'
}

/** input type for incrementing numeric columns in table "user" */
export type User_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "user" */
export type User_Insert_Input = {
  avatar?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  firstname?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  lastname?: InputMaybe<Scalars['String']>;
  posts?: InputMaybe<Post_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  upvotes?: InputMaybe<Upvote_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename?: 'user_max_fields';
  avatar?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  firstname?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  lastname?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: 'user_min_fields';
  avatar?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  firstname?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  lastname?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "user" */
export type User_Mutation_Response = {
  __typename?: 'user_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User>;
};

/** input type for inserting object relation for remote table "user" */
export type User_Obj_Rel_Insert_Input = {
  data: User_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<User_On_Conflict>;
};

/** on_conflict condition type for table "user" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns?: Array<User_Update_Column>;
  where?: InputMaybe<User_Bool_Exp>;
};

/** Ordering options when selecting data from "user". */
export type User_Order_By = {
  avatar?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  firstname?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastname?: InputMaybe<Order_By>;
  posts_aggregate?: InputMaybe<Post_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  upvotes_aggregate?: InputMaybe<Upvote_Aggregate_Order_By>;
};

/** primary key columns input for table: user */
export type User_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "user" */
export enum User_Select_Column {
  /** column name */
  Avatar = 'avatar',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Firstname = 'firstname',
  /** column name */
  Id = 'id',
  /** column name */
  Lastname = 'lastname',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "user" */
export type User_Set_Input = {
  avatar?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  firstname?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  lastname?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type User_Stddev_Fields = {
  __typename?: 'user_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type User_Stddev_Pop_Fields = {
  __typename?: 'user_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type User_Stddev_Samp_Fields = {
  __typename?: 'user_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type User_Sum_Fields = {
  __typename?: 'user_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "user" */
export enum User_Update_Column {
  /** column name */
  Avatar = 'avatar',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Firstname = 'firstname',
  /** column name */
  Id = 'id',
  /** column name */
  Lastname = 'lastname',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type User_Var_Pop_Fields = {
  __typename?: 'user_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type User_Var_Samp_Fields = {
  __typename?: 'user_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type User_Variance_Fields = {
  __typename?: 'user_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

export type InsertUpvoteMutationVariables = Exact<{
  upvote: Upvote_Insert_Input;
}>;


export type InsertUpvoteMutation = { __typename?: 'mutation_root', insert_upvote_one?: { __typename?: 'upvote', id: number, upvoter_id: number, upvoted_comment_id: number } | null };

export type InsertCommentMutationVariables = Exact<{
  comment: Comment_Insert_Input;
}>;


export type InsertCommentMutation = { __typename?: 'mutation_root', insert_comment_one?: { __typename?: 'comment', id: number, comment: string, created_at: any, user: { __typename?: 'user', id: number, avatar: string, firstname: string, lastname: string } } | null };

export type PostQueryVariables = Exact<{
  postId: Scalars['Int'];
}>;


export type PostQuery = { __typename?: 'query_root', post_by_pk?: { __typename?: 'post', id: number, comments: Array<{ __typename?: 'comment', id: number, comment: string, created_at: any, upvotes: { __typename?: 'upvote_aggregate', aggregate?: { __typename?: 'upvote_aggregate_fields', count: number } | null }, user: { __typename?: 'user', id: number, avatar: string, firstname: string, lastname: string }, replies: Array<{ __typename?: 'comment', id: number, comment: string, created_at: any, upvotes: { __typename?: 'upvote_aggregate', aggregate?: { __typename?: 'upvote_aggregate_fields', count: number } | null }, user: { __typename?: 'user', id: number, avatar: string, firstname: string, lastname: string } }> }> } | null };

export type PostsQueryVariables = Exact<{ [key: string]: never; }>;


export type PostsQuery = { __typename?: 'query_root', post: Array<{ __typename?: 'post', id: number, title: string }> };

export type UserQueryVariables = Exact<{
  currentUserId: Scalars['Int'];
}>;


export type UserQuery = { __typename?: 'query_root', user_by_pk?: { __typename?: 'user', id: number, firstname: string, lastname: string, avatar: string } | null };

export type PostCommentsSubscriptionVariables = Exact<{
  postId: Scalars['Int'];
}>;


export type PostCommentsSubscription = { __typename?: 'subscription_root', post_by_pk?: { __typename?: 'post', comments: Array<{ __typename?: 'comment', id: number, comment: string, created_at: any, upvotes: { __typename?: 'upvote_aggregate', aggregate?: { __typename?: 'upvote_aggregate_fields', count: number } | null }, replies: Array<{ __typename?: 'comment', id: number, comment: string, created_at: any, upvotes: { __typename?: 'upvote_aggregate', aggregate?: { __typename?: 'upvote_aggregate_fields', count: number } | null }, user: { __typename?: 'user', id: number, avatar: string, firstname: string, lastname: string } }>, user: { __typename?: 'user', id: number, firstname: string, lastname: string, avatar: string } }> } | null };

export type CommentsSubscriptionVariables = Exact<{
  commentId: Scalars['Int'];
}>;


export type CommentsSubscription = { __typename?: 'subscription_root', comment_by_pk?: { __typename?: 'comment', id: number, upvotes: { __typename?: 'upvote_aggregate', aggregate?: { __typename?: 'upvote_aggregate_fields', count: number } | null }, replies: Array<{ __typename?: 'comment', id: number, comment: string, created_at: any, upvotes: { __typename?: 'upvote_aggregate', aggregate?: { __typename?: 'upvote_aggregate_fields', count: number } | null }, user: { __typename?: 'user', id: number, avatar: string, firstname: string, lastname: string } }> } | null };


      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    

export const InsertUpvoteDocument = gql`
    mutation insertUpvote($upvote: upvote_insert_input!) {
  insert_upvote_one(object: $upvote) {
    id
    upvoter_id
    upvoted_comment_id
  }
}
    `;
export type InsertUpvoteMutationFn = Apollo.MutationFunction<InsertUpvoteMutation, InsertUpvoteMutationVariables>;

/**
 * __useInsertUpvoteMutation__
 *
 * To run a mutation, you first call `useInsertUpvoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertUpvoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertUpvoteMutation, { data, loading, error }] = useInsertUpvoteMutation({
 *   variables: {
 *      upvote: // value for 'upvote'
 *   },
 * });
 */
export function useInsertUpvoteMutation(baseOptions?: Apollo.MutationHookOptions<InsertUpvoteMutation, InsertUpvoteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertUpvoteMutation, InsertUpvoteMutationVariables>(InsertUpvoteDocument, options);
      }
export type InsertUpvoteMutationHookResult = ReturnType<typeof useInsertUpvoteMutation>;
export type InsertUpvoteMutationResult = Apollo.MutationResult<InsertUpvoteMutation>;
export type InsertUpvoteMutationOptions = Apollo.BaseMutationOptions<InsertUpvoteMutation, InsertUpvoteMutationVariables>;
export const InsertCommentDocument = gql`
    mutation insertComment($comment: comment_insert_input!) {
  insert_comment_one(object: $comment) {
    id
    comment
    created_at
    user {
      id
      avatar
      firstname
      lastname
    }
  }
}
    `;
export type InsertCommentMutationFn = Apollo.MutationFunction<InsertCommentMutation, InsertCommentMutationVariables>;

/**
 * __useInsertCommentMutation__
 *
 * To run a mutation, you first call `useInsertCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertCommentMutation, { data, loading, error }] = useInsertCommentMutation({
 *   variables: {
 *      comment: // value for 'comment'
 *   },
 * });
 */
export function useInsertCommentMutation(baseOptions?: Apollo.MutationHookOptions<InsertCommentMutation, InsertCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertCommentMutation, InsertCommentMutationVariables>(InsertCommentDocument, options);
      }
export type InsertCommentMutationHookResult = ReturnType<typeof useInsertCommentMutation>;
export type InsertCommentMutationResult = Apollo.MutationResult<InsertCommentMutation>;
export type InsertCommentMutationOptions = Apollo.BaseMutationOptions<InsertCommentMutation, InsertCommentMutationVariables>;
export const PostDocument = gql`
    query post($postId: Int!) {
  post_by_pk(id: $postId) {
    id
    comments(order_by: [{created_at: desc_nulls_last}]) {
      id
      comment
      created_at
      upvotes: upvotes_aggregate {
        aggregate {
          count
        }
      }
      user {
        id
        avatar
        firstname
        lastname
        avatar
      }
      replies(order_by: [{created_at: desc_nulls_last}]) {
        id
        comment
        created_at
        upvotes: upvotes_aggregate {
          aggregate {
            count
          }
        }
        user {
          id
          avatar
          firstname
          lastname
          avatar
        }
      }
    }
  }
}
    `;

/**
 * __usePostQuery__
 *
 * To run a query within a React component, call `usePostQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostQuery({
 *   variables: {
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function usePostQuery(baseOptions: Apollo.QueryHookOptions<PostQuery, PostQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PostQuery, PostQueryVariables>(PostDocument, options);
      }
export function usePostLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostQuery, PostQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PostQuery, PostQueryVariables>(PostDocument, options);
        }
export type PostQueryHookResult = ReturnType<typeof usePostQuery>;
export type PostLazyQueryHookResult = ReturnType<typeof usePostLazyQuery>;
export type PostQueryResult = Apollo.QueryResult<PostQuery, PostQueryVariables>;
export const PostsDocument = gql`
    query posts {
  post {
    id
    title
  }
}
    `;

/**
 * __usePostsQuery__
 *
 * To run a query within a React component, call `usePostsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostsQuery({
 *   variables: {
 *   },
 * });
 */
export function usePostsQuery(baseOptions?: Apollo.QueryHookOptions<PostsQuery, PostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PostsQuery, PostsQueryVariables>(PostsDocument, options);
      }
export function usePostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostsQuery, PostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PostsQuery, PostsQueryVariables>(PostsDocument, options);
        }
export type PostsQueryHookResult = ReturnType<typeof usePostsQuery>;
export type PostsLazyQueryHookResult = ReturnType<typeof usePostsLazyQuery>;
export type PostsQueryResult = Apollo.QueryResult<PostsQuery, PostsQueryVariables>;
export const UserDocument = gql`
    query user($currentUserId: Int!) {
  user_by_pk(id: $currentUserId) {
    id
    firstname
    lastname
    avatar
  }
}
    `;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      currentUserId: // value for 'currentUserId'
 *   },
 * });
 */
export function useUserQuery(baseOptions: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
export const PostCommentsDocument = gql`
    subscription postComments($postId: Int!) {
  post_by_pk(id: $postId) {
    comments(order_by: {created_at: desc}, limit: 1) {
      id
      comment
      created_at
      upvotes: upvotes_aggregate {
        aggregate {
          count
        }
      }
      replies(order_by: [{created_at: desc_nulls_last}]) {
        id
        comment
        created_at
        upvotes: upvotes_aggregate {
          aggregate {
            count
          }
        }
        user {
          id
          avatar
          firstname
          lastname
          avatar
        }
      }
      user {
        id
        firstname
        lastname
        avatar
      }
    }
  }
}
    `;

/**
 * __usePostCommentsSubscription__
 *
 * To run a query within a React component, call `usePostCommentsSubscription` and pass it any options that fit your needs.
 * When your component renders, `usePostCommentsSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostCommentsSubscription({
 *   variables: {
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function usePostCommentsSubscription(baseOptions: Apollo.SubscriptionHookOptions<PostCommentsSubscription, PostCommentsSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<PostCommentsSubscription, PostCommentsSubscriptionVariables>(PostCommentsDocument, options);
      }
export type PostCommentsSubscriptionHookResult = ReturnType<typeof usePostCommentsSubscription>;
export type PostCommentsSubscriptionResult = Apollo.SubscriptionResult<PostCommentsSubscription>;
export const CommentsDocument = gql`
    subscription comments($commentId: Int!) {
  comment_by_pk(id: $commentId) {
    id
    upvotes: upvotes_aggregate {
      aggregate {
        count
      }
    }
    replies(order_by: [{created_at: desc_nulls_last}]) {
      id
      comment
      created_at
      upvotes: upvotes_aggregate {
        aggregate {
          count
        }
      }
      user {
        id
        avatar
        firstname
        lastname
        avatar
      }
    }
  }
}
    `;

/**
 * __useCommentsSubscription__
 *
 * To run a query within a React component, call `useCommentsSubscription` and pass it any options that fit your needs.
 * When your component renders, `useCommentsSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCommentsSubscription({
 *   variables: {
 *      commentId: // value for 'commentId'
 *   },
 * });
 */
export function useCommentsSubscription(baseOptions: Apollo.SubscriptionHookOptions<CommentsSubscription, CommentsSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<CommentsSubscription, CommentsSubscriptionVariables>(CommentsDocument, options);
      }
export type CommentsSubscriptionHookResult = ReturnType<typeof useCommentsSubscription>;
export type CommentsSubscriptionResult = Apollo.SubscriptionResult<CommentsSubscription>;