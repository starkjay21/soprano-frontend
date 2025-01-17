import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: { input: string; output: string };
	String: { input: string; output: string };
	Boolean: { input: boolean; output: boolean };
	Int: { input: number; output: number };
	Float: { input: number; output: number };
	DateTime: { input: any; output: any };
	Upload: { input: any; output: any };
};

export type AuthPayload = {
	__typename?: 'AuthPayload';
	token?: Maybe<Scalars['String']['output']>;
	user: User;
};

export type File = {
	__typename?: 'File';
	encoding?: Maybe<Scalars['String']['output']>;
	filename?: Maybe<Scalars['String']['output']>;
	id?: Maybe<Scalars['ID']['output']>;
	mimetype?: Maybe<Scalars['String']['output']>;
	path?: Maybe<Scalars['String']['output']>;
};

export enum GenderType {
	Female = 'FEMALE',
	Male = 'MALE',
	Others = 'OTHERS',
}

/** Generateed UIs from sketches through users */
export type Generation = {
	__typename?: 'Generation';
	code?: Maybe<Scalars['String']['output']>;
	createdAt: Scalars['DateTime']['output'];
	deletedAt: Scalars['DateTime']['output'];
	description?: Maybe<Scalars['String']['output']>;
	id: Scalars['Int']['output'];
	isPublic: Scalars['Boolean']['output'];
	name: Scalars['String']['output'];
	prompt: Scalars['String']['output'];
	/** Users with whom the UI is shared */
	sharedWith?: Maybe<Array<Maybe<SharedGeneration>>>;
	/** Thread of generations */
	thread?: Maybe<Thread>;
	threadId?: Maybe<Scalars['Int']['output']>;
	updatedAt: Scalars['DateTime']['output'];
	/** User who generated the UI */
	user: User;
	userId: Scalars['Int']['output'];
};

/** Images used in generation of UI */
export type Image = {
	__typename?: 'Image';
	createdAt: Scalars['DateTime']['output'];
	deletedAt: Scalars['DateTime']['output'];
	id: Scalars['Int']['output'];
	name: Scalars['String']['output'];
	updatedAt: Scalars['DateTime']['output'];
	url: Scalars['String']['output'];
};

/** Input arguments for createImage event */
export type ImageCreateInputType = {
	file?: InputMaybe<Scalars['Upload']['input']>;
};

export type Mutation = {
	__typename?: 'Mutation';
	/** Change the password of the current logged in user */
	changePassword?: Maybe<Scalars['Boolean']['output']>;
	/** Login the user and return the token and user */
	login?: Maybe<AuthPayload>;
	/** Create a new user and return the token and user */
	signup?: Maybe<AuthPayload>;
	/** Update the profile of the current logged in user or the user with the given id if the user is an admin */
	updateProfile?: Maybe<User>;
	/** Upload an image */
	uploadImage?: Maybe<Image>;
};

export type MutationChangePasswordArgs = {
	newPassword: Scalars['String']['input'];
	oldPassword?: InputMaybe<Scalars['String']['input']>;
	username?: InputMaybe<Scalars['String']['input']>;
};

export type MutationLoginArgs = {
	password: Scalars['String']['input'];
	username: Scalars['String']['input'];
};

export type MutationSignupArgs = {
	data: UserCreateInputType;
};

export type MutationUpdateProfileArgs = {
	data: UserUpdateInputType;
	id?: InputMaybe<Scalars['Int']['input']>;
};

export type MutationUploadImageArgs = {
	input?: InputMaybe<ImageCreateInputType>;
};

/** Paginated response for user query */
export type PaginatedUserType = {
	__typename?: 'PaginatedUserType';
	count?: Maybe<Scalars['Int']['output']>;
	data?: Maybe<Array<Maybe<User>>>;
};

export type Query = {
	__typename?: 'Query';
	/** Get the current logged in user */
	me?: Maybe<User>;
	/** Retrieves a list of users depending on the query arguments */
	user?: Maybe<PaginatedUserType>;
};

export type QueryUserArgs = {
	id?: InputMaybe<Scalars['Int']['input']>;
	pagination?: InputMaybe<PaginationInputType>;
	username?: InputMaybe<Scalars['String']['input']>;
};

export enum RoleType {
	Admin = 'ADMIN',
	User = 'USER',
}

/** Generations shared between users */
export type SharedGeneration = {
	__typename?: 'SharedGeneration';
	createdAt: Scalars['DateTime']['output'];
	deletedAt: Scalars['DateTime']['output'];
	/** Generation shared with the user */
	generation?: Maybe<Generation>;
	generationId?: Maybe<Scalars['Int']['output']>;
	id: Scalars['Int']['output'];
	updatedAt: Scalars['DateTime']['output'];
	/** User with whom the generation is shared */
	user?: Maybe<User>;
	userId?: Maybe<Scalars['Int']['output']>;
};

/** Thread of generations based on the same image but same prompt */
export type Thread = {
	__typename?: 'Thread';
	createdAt: Scalars['DateTime']['output'];
	deletedAt: Scalars['DateTime']['output'];
	generationIds?: Maybe<Array<Scalars['Int']['output']>>;
	generations?: Maybe<Array<Generation>>;
	id: Scalars['Int']['output'];
	image?: Maybe<Image>;
	imageId: Scalars['Int']['output'];
	name?: Maybe<Scalars['String']['output']>;
	updatedAt: Scalars['DateTime']['output'];
};

export type User = {
	__typename?: 'User';
	createdAt?: Maybe<Scalars['DateTime']['output']>;
	deletedAt?: Maybe<Scalars['DateTime']['output']>;
	email: Scalars['String']['output'];
	gender: GenderType;
	id: Scalars['Int']['output'];
	name: Scalars['String']['output'];
	profile?: Maybe<Scalars['String']['output']>;
	role: RoleType;
	updatedAt?: Maybe<Scalars['DateTime']['output']>;
	username: Scalars['String']['output'];
};

export type UserCreateInputType = {
	email: Scalars['String']['input'];
	gender: GenderType;
	name: Scalars['String']['input'];
	password: Scalars['String']['input'];
	profile?: InputMaybe<Scalars['String']['input']>;
	username?: InputMaybe<Scalars['String']['input']>;
};

export type UserUpdateInputType = {
	email?: InputMaybe<Scalars['String']['input']>;
	gender?: InputMaybe<GenderType>;
	name?: InputMaybe<Scalars['String']['input']>;
	profile?: InputMaybe<Scalars['String']['input']>;
	username?: InputMaybe<Scalars['String']['input']>;
};

/** Input arguments used for pagination details */
export type PaginationInputType = {
	skip?: Scalars['Int']['input'];
	take?: Scalars['Int']['input'];
};

export type UploadImageMutationVariables = Exact<{
	input?: InputMaybe<ImageCreateInputType>;
}>;

export type UploadImageMutation = {
	__typename?: 'Mutation';
	uploadImage?: {
		__typename?: 'Image';
		id: number;
		name: string;
		url: string;
		createdAt: any;
		updatedAt: any;
		deletedAt: any;
	} | null;
};

export const UploadImageDocument = gql`
	mutation UploadImage($input: ImageCreateInputType) {
		uploadImage(input: $input) {
			id
			name
			url
			createdAt
			updatedAt
			deletedAt
		}
	}
`;
export type UploadImageMutationFn = Apollo.MutationFunction<UploadImageMutation, UploadImageMutationVariables>;

/**
 * __useUploadImageMutation__
 *
 * To run a mutation, you first call `useUploadImageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadImageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadImageMutation, { data, loading, error }] = useUploadImageMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUploadImageMutation(
	baseOptions?: Apollo.MutationHookOptions<UploadImageMutation, UploadImageMutationVariables>
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<UploadImageMutation, UploadImageMutationVariables>(UploadImageDocument, options);
}
export type UploadImageMutationHookResult = ReturnType<typeof useUploadImageMutation>;
export type UploadImageMutationResult = Apollo.MutationResult<UploadImageMutation>;
export type UploadImageMutationOptions = Apollo.BaseMutationOptions<UploadImageMutation, UploadImageMutationVariables>;
