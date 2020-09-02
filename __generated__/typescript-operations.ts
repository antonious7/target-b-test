export type Maybe<T> = T | null;
export type TextQueryVariables = {};


export type TextQuery = (
  { __typename?: 'Query' }
  & { text: Maybe<(
    { __typename?: 'TextInputType' }
    & Pick<TextInputType, 'id' | 'text'>
  )> }
);

export type UpdateTextMutationVariables = {
  id: Scalars['ID'],
  input: TextInput
};


export type UpdateTextMutation = (
  { __typename?: 'Mutation' }
  & { updateText: (
    { __typename?: 'TextInputType' }
    & Pick<TextInputType, 'id' | 'text'>
  ) }
);

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type Mutation = {
   __typename?: 'Mutation',
  updateText: TextInputType,
};


export type MutationUpdateTextArgs = {
  id: Scalars['ID'],
  input: TextInput
};

export type Query = {
   __typename?: 'Query',
  text?: Maybe<TextInputType>,
};

export type TextInput = {
  text: Scalars['String'],
};

export type TextInputType = {
   __typename?: 'TextInputType',
  id: Scalars['ID'],
  text: Scalars['String'],
};
