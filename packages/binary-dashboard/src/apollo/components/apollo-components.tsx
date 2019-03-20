export type Maybe<T> = T | null

export interface CommentSectionWhereInput {
	id?: Maybe<string>

	id_not?: Maybe<string>

	id_in?: Maybe<string[]>

	id_not_in?: Maybe<string[]>

	id_lt?: Maybe<string>

	id_lte?: Maybe<string>

	id_gt?: Maybe<string>

	id_gte?: Maybe<string>

	id_contains?: Maybe<string>

	id_not_contains?: Maybe<string>

	id_starts_with?: Maybe<string>

	id_not_starts_with?: Maybe<string>

	id_ends_with?: Maybe<string>

	id_not_ends_with?: Maybe<string>

	comments_every?: Maybe<CommentWhereInput>

	comments_some?: Maybe<CommentWhereInput>

	comments_none?: Maybe<CommentWhereInput>

	pageId?: Maybe<string>

	pageId_not?: Maybe<string>

	pageId_in?: Maybe<string[]>

	pageId_not_in?: Maybe<string[]>

	pageId_lt?: Maybe<string>

	pageId_lte?: Maybe<string>

	pageId_gt?: Maybe<string>

	pageId_gte?: Maybe<string>

	pageId_contains?: Maybe<string>

	pageId_not_contains?: Maybe<string>

	pageId_starts_with?: Maybe<string>

	pageId_not_starts_with?: Maybe<string>

	pageId_ends_with?: Maybe<string>

	pageId_not_ends_with?: Maybe<string>

	url?: Maybe<string>

	url_not?: Maybe<string>

	url_in?: Maybe<string[]>

	url_not_in?: Maybe<string[]>

	url_lt?: Maybe<string>

	url_lte?: Maybe<string>

	url_gt?: Maybe<string>

	url_gte?: Maybe<string>

	url_contains?: Maybe<string>

	url_not_contains?: Maybe<string>

	url_starts_with?: Maybe<string>

	url_not_starts_with?: Maybe<string>

	url_ends_with?: Maybe<string>

	url_not_ends_with?: Maybe<string>

	admin?: Maybe<UserWhereInput>

	moderators_every?: Maybe<ModeratorWhereInput>

	moderators_some?: Maybe<ModeratorWhereInput>

	moderators_none?: Maybe<ModeratorWhereInput>

	options?: Maybe<CommentOptionsWhereInput>

	bannedUsers_every?: Maybe<UserWhereInput>

	bannedUsers_some?: Maybe<UserWhereInput>

	bannedUsers_none?: Maybe<UserWhereInput>

	createdAt?: Maybe<DateTime>

	createdAt_not?: Maybe<DateTime>

	createdAt_in?: Maybe<DateTime[]>

	createdAt_not_in?: Maybe<DateTime[]>

	createdAt_lt?: Maybe<DateTime>

	createdAt_lte?: Maybe<DateTime>

	createdAt_gt?: Maybe<DateTime>

	createdAt_gte?: Maybe<DateTime>

	updatedAt?: Maybe<DateTime>

	updatedAt_not?: Maybe<DateTime>

	updatedAt_in?: Maybe<DateTime[]>

	updatedAt_not_in?: Maybe<DateTime[]>

	updatedAt_lt?: Maybe<DateTime>

	updatedAt_lte?: Maybe<DateTime>

	updatedAt_gt?: Maybe<DateTime>

	updatedAt_gte?: Maybe<DateTime>

	AND?: Maybe<CommentSectionWhereInput[]>

	OR?: Maybe<CommentSectionWhereInput[]>

	NOT?: Maybe<CommentSectionWhereInput[]>
}

export interface CommentWhereInput {
	id?: Maybe<string>

	id_not?: Maybe<string>

	id_in?: Maybe<string[]>

	id_not_in?: Maybe<string[]>

	id_lt?: Maybe<string>

	id_lte?: Maybe<string>

	id_gt?: Maybe<string>

	id_gte?: Maybe<string>

	id_contains?: Maybe<string>

	id_not_contains?: Maybe<string>

	id_starts_with?: Maybe<string>

	id_not_starts_with?: Maybe<string>

	id_ends_with?: Maybe<string>

	id_not_ends_with?: Maybe<string>

	body?: Maybe<string>

	body_not?: Maybe<string>

	body_in?: Maybe<string[]>

	body_not_in?: Maybe<string[]>

	body_lt?: Maybe<string>

	body_lte?: Maybe<string>

	body_gt?: Maybe<string>

	body_gte?: Maybe<string>

	body_contains?: Maybe<string>

	body_not_contains?: Maybe<string>

	body_starts_with?: Maybe<string>

	body_not_starts_with?: Maybe<string>

	body_ends_with?: Maybe<string>

	body_not_ends_with?: Maybe<string>

	parentId?: Maybe<string>

	parentId_not?: Maybe<string>

	parentId_in?: Maybe<string[]>

	parentId_not_in?: Maybe<string[]>

	parentId_lt?: Maybe<string>

	parentId_lte?: Maybe<string>

	parentId_gt?: Maybe<string>

	parentId_gte?: Maybe<string>

	parentId_contains?: Maybe<string>

	parentId_not_contains?: Maybe<string>

	parentId_starts_with?: Maybe<string>

	parentId_not_starts_with?: Maybe<string>

	parentId_ends_with?: Maybe<string>

	parentId_not_ends_with?: Maybe<string>

	pageId?: Maybe<string>

	pageId_not?: Maybe<string>

	pageId_in?: Maybe<string[]>

	pageId_not_in?: Maybe<string[]>

	pageId_lt?: Maybe<string>

	pageId_lte?: Maybe<string>

	pageId_gt?: Maybe<string>

	pageId_gte?: Maybe<string>

	pageId_contains?: Maybe<string>

	pageId_not_contains?: Maybe<string>

	pageId_starts_with?: Maybe<string>

	pageId_not_starts_with?: Maybe<string>

	pageId_ends_with?: Maybe<string>

	pageId_not_ends_with?: Maybe<string>

	repliedTo?: Maybe<UserWhereInput>

	ratings?: Maybe<RatingWhereInput>

	createdAt?: Maybe<DateTime>

	createdAt_not?: Maybe<DateTime>

	createdAt_in?: Maybe<DateTime[]>

	createdAt_not_in?: Maybe<DateTime[]>

	createdAt_lt?: Maybe<DateTime>

	createdAt_lte?: Maybe<DateTime>

	createdAt_gt?: Maybe<DateTime>

	createdAt_gte?: Maybe<DateTime>

	updatedAt?: Maybe<DateTime>

	updatedAt_not?: Maybe<DateTime>

	updatedAt_in?: Maybe<DateTime[]>

	updatedAt_not_in?: Maybe<DateTime[]>

	updatedAt_lt?: Maybe<DateTime>

	updatedAt_lte?: Maybe<DateTime>

	updatedAt_gt?: Maybe<DateTime>

	updatedAt_gte?: Maybe<DateTime>

	replies_every?: Maybe<CommentWhereInput>

	replies_some?: Maybe<CommentWhereInput>

	replies_none?: Maybe<CommentWhereInput>

	author?: Maybe<UserWhereInput>

	AND?: Maybe<CommentWhereInput[]>

	OR?: Maybe<CommentWhereInput[]>

	NOT?: Maybe<CommentWhereInput[]>
}

export interface UserWhereInput {
	id?: Maybe<string>

	id_not?: Maybe<string>

	id_in?: Maybe<string[]>

	id_not_in?: Maybe<string[]>

	id_lt?: Maybe<string>

	id_lte?: Maybe<string>

	id_gt?: Maybe<string>

	id_gte?: Maybe<string>

	id_contains?: Maybe<string>

	id_not_contains?: Maybe<string>

	id_starts_with?: Maybe<string>

	id_not_starts_with?: Maybe<string>

	id_ends_with?: Maybe<string>

	id_not_ends_with?: Maybe<string>

	email?: Maybe<string>

	email_not?: Maybe<string>

	email_in?: Maybe<string[]>

	email_not_in?: Maybe<string[]>

	email_lt?: Maybe<string>

	email_lte?: Maybe<string>

	email_gt?: Maybe<string>

	email_gte?: Maybe<string>

	email_contains?: Maybe<string>

	email_not_contains?: Maybe<string>

	email_starts_with?: Maybe<string>

	email_not_starts_with?: Maybe<string>

	email_ends_with?: Maybe<string>

	email_not_ends_with?: Maybe<string>

	notifications_every?: Maybe<NotificationWhereInput>

	notifications_some?: Maybe<NotificationWhereInput>

	notifications_none?: Maybe<NotificationWhereInput>

	set_private?: Maybe<boolean>

	set_private_not?: Maybe<boolean>

	username?: Maybe<string>

	username_not?: Maybe<string>

	username_in?: Maybe<string[]>

	username_not_in?: Maybe<string[]>

	username_lt?: Maybe<string>

	username_lte?: Maybe<string>

	username_gt?: Maybe<string>

	username_gte?: Maybe<string>

	username_contains?: Maybe<string>

	username_not_contains?: Maybe<string>

	username_starts_with?: Maybe<string>

	username_not_starts_with?: Maybe<string>

	username_ends_with?: Maybe<string>

	username_not_ends_with?: Maybe<string>

	password?: Maybe<string>

	password_not?: Maybe<string>

	password_in?: Maybe<string[]>

	password_not_in?: Maybe<string[]>

	password_lt?: Maybe<string>

	password_lte?: Maybe<string>

	password_gt?: Maybe<string>

	password_gte?: Maybe<string>

	password_contains?: Maybe<string>

	password_not_contains?: Maybe<string>

	password_starts_with?: Maybe<string>

	password_not_starts_with?: Maybe<string>

	password_ends_with?: Maybe<string>

	password_not_ends_with?: Maybe<string>

	gitHubId?: Maybe<string>

	gitHubId_not?: Maybe<string>

	gitHubId_in?: Maybe<string[]>

	gitHubId_not_in?: Maybe<string[]>

	gitHubId_lt?: Maybe<string>

	gitHubId_lte?: Maybe<string>

	gitHubId_gt?: Maybe<string>

	gitHubId_gte?: Maybe<string>

	gitHubId_contains?: Maybe<string>

	gitHubId_not_contains?: Maybe<string>

	gitHubId_starts_with?: Maybe<string>

	gitHubId_not_starts_with?: Maybe<string>

	gitHubId_ends_with?: Maybe<string>

	gitHubId_not_ends_with?: Maybe<string>

	facebookId?: Maybe<string>

	facebookId_not?: Maybe<string>

	facebookId_in?: Maybe<string[]>

	facebookId_not_in?: Maybe<string[]>

	facebookId_lt?: Maybe<string>

	facebookId_lte?: Maybe<string>

	facebookId_gt?: Maybe<string>

	facebookId_gte?: Maybe<string>

	facebookId_contains?: Maybe<string>

	facebookId_not_contains?: Maybe<string>

	facebookId_starts_with?: Maybe<string>

	facebookId_not_starts_with?: Maybe<string>

	facebookId_ends_with?: Maybe<string>

	facebookId_not_ends_with?: Maybe<string>

	twitterId?: Maybe<string>

	twitterId_not?: Maybe<string>

	twitterId_in?: Maybe<string[]>

	twitterId_not_in?: Maybe<string[]>

	twitterId_lt?: Maybe<string>

	twitterId_lte?: Maybe<string>

	twitterId_gt?: Maybe<string>

	twitterId_gte?: Maybe<string>

	twitterId_contains?: Maybe<string>

	twitterId_not_contains?: Maybe<string>

	twitterId_starts_with?: Maybe<string>

	twitterId_not_starts_with?: Maybe<string>

	twitterId_ends_with?: Maybe<string>

	twitterId_not_ends_with?: Maybe<string>

	gmailId?: Maybe<string>

	gmailId_not?: Maybe<string>

	gmailId_in?: Maybe<string[]>

	gmailId_not_in?: Maybe<string[]>

	gmailId_lt?: Maybe<string>

	gmailId_lte?: Maybe<string>

	gmailId_gt?: Maybe<string>

	gmailId_gte?: Maybe<string>

	gmailId_contains?: Maybe<string>

	gmailId_not_contains?: Maybe<string>

	gmailId_starts_with?: Maybe<string>

	gmailId_not_starts_with?: Maybe<string>

	gmailId_ends_with?: Maybe<string>

	gmailId_not_ends_with?: Maybe<string>

	directMessages_every?: Maybe<CommentWhereInput>

	directMessages_some?: Maybe<CommentWhereInput>

	directMessages_none?: Maybe<CommentWhereInput>

	avatar_url?: Maybe<FileWhereInput>

	private?: Maybe<boolean>

	private_not?: Maybe<boolean>

	blockedUsers_every?: Maybe<UserWhereInput>

	blockedUsers_some?: Maybe<UserWhereInput>

	blockedUsers_none?: Maybe<UserWhereInput>

	confirmed?: Maybe<boolean>

	confirmed_not?: Maybe<boolean>

	online?: Maybe<boolean>

	online_not?: Maybe<boolean>

	friends_every?: Maybe<UserWhereInput>

	friends_some?: Maybe<UserWhereInput>

	friends_none?: Maybe<UserWhereInput>

	friend_requests_every?: Maybe<UserWhereInput>

	friend_requests_some?: Maybe<UserWhereInput>

	friend_requests_none?: Maybe<UserWhereInput>

	createdAt?: Maybe<DateTime>

	createdAt_not?: Maybe<DateTime>

	createdAt_in?: Maybe<DateTime[]>

	createdAt_not_in?: Maybe<DateTime[]>

	createdAt_lt?: Maybe<DateTime>

	createdAt_lte?: Maybe<DateTime>

	createdAt_gt?: Maybe<DateTime>

	createdAt_gte?: Maybe<DateTime>

	updatedAt?: Maybe<DateTime>

	updatedAt_not?: Maybe<DateTime>

	updatedAt_in?: Maybe<DateTime[]>

	updatedAt_not_in?: Maybe<DateTime[]>

	updatedAt_lt?: Maybe<DateTime>

	updatedAt_lte?: Maybe<DateTime>

	updatedAt_gt?: Maybe<DateTime>

	updatedAt_gte?: Maybe<DateTime>

	role?: Maybe<UserRole>

	role_not?: Maybe<UserRole>

	role_in?: Maybe<UserRole[]>

	role_not_in?: Maybe<UserRole[]>

	teams_every?: Maybe<TeamWhereInput>

	teams_some?: Maybe<TeamWhereInput>

	teams_none?: Maybe<TeamWhereInput>

	api_services_every?: Maybe<ApiServiceWhereInput>

	api_services_some?: Maybe<ApiServiceWhereInput>

	api_services_none?: Maybe<ApiServiceWhereInput>

	channels_every?: Maybe<ChannelWhereInput>

	channels_some?: Maybe<ChannelWhereInput>

	channels_none?: Maybe<ChannelWhereInput>

	owned_teams_every?: Maybe<TeamWhereInput>

	owned_teams_some?: Maybe<TeamWhereInput>

	owned_teams_none?: Maybe<TeamWhereInput>

	owned_channels_every?: Maybe<ChannelWhereInput>

	owned_channels_some?: Maybe<ChannelWhereInput>

	owned_channels_none?: Maybe<ChannelWhereInput>

	AND?: Maybe<UserWhereInput[]>

	OR?: Maybe<UserWhereInput[]>

	NOT?: Maybe<UserWhereInput[]>
}

export interface NotificationWhereInput {
	id?: Maybe<string>

	id_not?: Maybe<string>

	id_in?: Maybe<string[]>

	id_not_in?: Maybe<string[]>

	id_lt?: Maybe<string>

	id_lte?: Maybe<string>

	id_gt?: Maybe<string>

	id_gte?: Maybe<string>

	id_contains?: Maybe<string>

	id_not_contains?: Maybe<string>

	id_starts_with?: Maybe<string>

	id_not_starts_with?: Maybe<string>

	id_ends_with?: Maybe<string>

	id_not_ends_with?: Maybe<string>

	message?: Maybe<string>

	message_not?: Maybe<string>

	message_in?: Maybe<string[]>

	message_not_in?: Maybe<string[]>

	message_lt?: Maybe<string>

	message_lte?: Maybe<string>

	message_gt?: Maybe<string>

	message_gte?: Maybe<string>

	message_contains?: Maybe<string>

	message_not_contains?: Maybe<string>

	message_starts_with?: Maybe<string>

	message_not_starts_with?: Maybe<string>

	message_ends_with?: Maybe<string>

	message_not_ends_with?: Maybe<string>

	comments?: Maybe<CommentWhereInput>

	messages?: Maybe<MessageWhereInput>

	team?: Maybe<TeamWhereInput>

	channel?: Maybe<ChannelWhereInput>

	friend_requests?: Maybe<UserWhereInput>

	friend?: Maybe<UserWhereInput>

	author?: Maybe<UserWhereInput>

	AND?: Maybe<NotificationWhereInput[]>

	OR?: Maybe<NotificationWhereInput[]>

	NOT?: Maybe<NotificationWhereInput[]>
}

export interface MessageWhereInput {
	id?: Maybe<string>

	id_not?: Maybe<string>

	id_in?: Maybe<string[]>

	id_not_in?: Maybe<string[]>

	id_lt?: Maybe<string>

	id_lte?: Maybe<string>

	id_gt?: Maybe<string>

	id_gte?: Maybe<string>

	id_contains?: Maybe<string>

	id_not_contains?: Maybe<string>

	id_starts_with?: Maybe<string>

	id_not_starts_with?: Maybe<string>

	id_ends_with?: Maybe<string>

	id_not_ends_with?: Maybe<string>

	body?: Maybe<string>

	body_not?: Maybe<string>

	body_in?: Maybe<string[]>

	body_not_in?: Maybe<string[]>

	body_lt?: Maybe<string>

	body_lte?: Maybe<string>

	body_gt?: Maybe<string>

	body_gte?: Maybe<string>

	body_contains?: Maybe<string>

	body_not_contains?: Maybe<string>

	body_starts_with?: Maybe<string>

	body_not_starts_with?: Maybe<string>

	body_ends_with?: Maybe<string>

	body_not_ends_with?: Maybe<string>

	parentId?: Maybe<string>

	parentId_not?: Maybe<string>

	parentId_in?: Maybe<string[]>

	parentId_not_in?: Maybe<string[]>

	parentId_lt?: Maybe<string>

	parentId_lte?: Maybe<string>

	parentId_gt?: Maybe<string>

	parentId_gte?: Maybe<string>

	parentId_contains?: Maybe<string>

	parentId_not_contains?: Maybe<string>

	parentId_starts_with?: Maybe<string>

	parentId_not_starts_with?: Maybe<string>

	parentId_ends_with?: Maybe<string>

	parentId_not_ends_with?: Maybe<string>

	url?: Maybe<string>

	url_not?: Maybe<string>

	url_in?: Maybe<string[]>

	url_not_in?: Maybe<string[]>

	url_lt?: Maybe<string>

	url_lte?: Maybe<string>

	url_gt?: Maybe<string>

	url_gte?: Maybe<string>

	url_contains?: Maybe<string>

	url_not_contains?: Maybe<string>

	url_starts_with?: Maybe<string>

	url_not_starts_with?: Maybe<string>

	url_ends_with?: Maybe<string>

	url_not_ends_with?: Maybe<string>

	filetype?: Maybe<string>

	filetype_not?: Maybe<string>

	filetype_in?: Maybe<string[]>

	filetype_not_in?: Maybe<string[]>

	filetype_lt?: Maybe<string>

	filetype_lte?: Maybe<string>

	filetype_gt?: Maybe<string>

	filetype_gte?: Maybe<string>

	filetype_contains?: Maybe<string>

	filetype_not_contains?: Maybe<string>

	filetype_starts_with?: Maybe<string>

	filetype_not_starts_with?: Maybe<string>

	filetype_ends_with?: Maybe<string>

	filetype_not_ends_with?: Maybe<string>

	author?: Maybe<UserWhereInput>

	createdAt?: Maybe<DateTime>

	createdAt_not?: Maybe<DateTime>

	createdAt_in?: Maybe<DateTime[]>

	createdAt_not_in?: Maybe<DateTime[]>

	createdAt_lt?: Maybe<DateTime>

	createdAt_lte?: Maybe<DateTime>

	createdAt_gt?: Maybe<DateTime>

	createdAt_gte?: Maybe<DateTime>

	updatedAt?: Maybe<DateTime>

	updatedAt_not?: Maybe<DateTime>

	updatedAt_in?: Maybe<DateTime[]>

	updatedAt_not_in?: Maybe<DateTime[]>

	updatedAt_lt?: Maybe<DateTime>

	updatedAt_lte?: Maybe<DateTime>

	updatedAt_gt?: Maybe<DateTime>

	updatedAt_gte?: Maybe<DateTime>

	AND?: Maybe<MessageWhereInput[]>

	OR?: Maybe<MessageWhereInput[]>

	NOT?: Maybe<MessageWhereInput[]>
}

export interface TeamWhereInput {
	id?: Maybe<string>

	id_not?: Maybe<string>

	id_in?: Maybe<string[]>

	id_not_in?: Maybe<string[]>

	id_lt?: Maybe<string>

	id_lte?: Maybe<string>

	id_gt?: Maybe<string>

	id_gte?: Maybe<string>

	id_contains?: Maybe<string>

	id_not_contains?: Maybe<string>

	id_starts_with?: Maybe<string>

	id_not_starts_with?: Maybe<string>

	id_ends_with?: Maybe<string>

	id_not_ends_with?: Maybe<string>

	name?: Maybe<string>

	name_not?: Maybe<string>

	name_in?: Maybe<string[]>

	name_not_in?: Maybe<string[]>

	name_lt?: Maybe<string>

	name_lte?: Maybe<string>

	name_gt?: Maybe<string>

	name_gte?: Maybe<string>

	name_contains?: Maybe<string>

	name_not_contains?: Maybe<string>

	name_starts_with?: Maybe<string>

	name_not_starts_with?: Maybe<string>

	name_ends_with?: Maybe<string>

	name_not_ends_with?: Maybe<string>

	slug?: Maybe<string>

	slug_not?: Maybe<string>

	slug_in?: Maybe<string[]>

	slug_not_in?: Maybe<string[]>

	slug_lt?: Maybe<string>

	slug_lte?: Maybe<string>

	slug_gt?: Maybe<string>

	slug_gte?: Maybe<string>

	slug_contains?: Maybe<string>

	slug_not_contains?: Maybe<string>

	slug_starts_with?: Maybe<string>

	slug_not_starts_with?: Maybe<string>

	slug_ends_with?: Maybe<string>

	slug_not_ends_with?: Maybe<string>

	moderators_every?: Maybe<UserWhereInput>

	moderators_some?: Maybe<UserWhereInput>

	moderators_none?: Maybe<UserWhereInput>

	author?: Maybe<UserWhereInput>

	members_every?: Maybe<UserWhereInput>

	members_some?: Maybe<UserWhereInput>

	members_none?: Maybe<UserWhereInput>

	channels_every?: Maybe<ChannelWhereInput>

	channels_some?: Maybe<ChannelWhereInput>

	channels_none?: Maybe<ChannelWhereInput>

	createdAt?: Maybe<DateTime>

	createdAt_not?: Maybe<DateTime>

	createdAt_in?: Maybe<DateTime[]>

	createdAt_not_in?: Maybe<DateTime[]>

	createdAt_lt?: Maybe<DateTime>

	createdAt_lte?: Maybe<DateTime>

	createdAt_gt?: Maybe<DateTime>

	createdAt_gte?: Maybe<DateTime>

	updatedAt?: Maybe<DateTime>

	updatedAt_not?: Maybe<DateTime>

	updatedAt_in?: Maybe<DateTime[]>

	updatedAt_not_in?: Maybe<DateTime[]>

	updatedAt_lt?: Maybe<DateTime>

	updatedAt_lte?: Maybe<DateTime>

	updatedAt_gt?: Maybe<DateTime>

	updatedAt_gte?: Maybe<DateTime>

	confirmed?: Maybe<boolean>

	confirmed_not?: Maybe<boolean>

	online?: Maybe<boolean>

	online_not?: Maybe<boolean>

	AND?: Maybe<TeamWhereInput[]>

	OR?: Maybe<TeamWhereInput[]>

	NOT?: Maybe<TeamWhereInput[]>
}

export interface ChannelWhereInput {
	id?: Maybe<string>

	id_not?: Maybe<string>

	id_in?: Maybe<string[]>

	id_not_in?: Maybe<string[]>

	id_lt?: Maybe<string>

	id_lte?: Maybe<string>

	id_gt?: Maybe<string>

	id_gte?: Maybe<string>

	id_contains?: Maybe<string>

	id_not_contains?: Maybe<string>

	id_starts_with?: Maybe<string>

	id_not_starts_with?: Maybe<string>

	id_ends_with?: Maybe<string>

	id_not_ends_with?: Maybe<string>

	name?: Maybe<string>

	name_not?: Maybe<string>

	name_in?: Maybe<string[]>

	name_not_in?: Maybe<string[]>

	name_lt?: Maybe<string>

	name_lte?: Maybe<string>

	name_gt?: Maybe<string>

	name_gte?: Maybe<string>

	name_contains?: Maybe<string>

	name_not_contains?: Maybe<string>

	name_starts_with?: Maybe<string>

	name_not_starts_with?: Maybe<string>

	name_ends_with?: Maybe<string>

	name_not_ends_with?: Maybe<string>

	slug?: Maybe<string>

	slug_not?: Maybe<string>

	slug_in?: Maybe<string[]>

	slug_not_in?: Maybe<string[]>

	slug_lt?: Maybe<string>

	slug_lte?: Maybe<string>

	slug_gt?: Maybe<string>

	slug_gte?: Maybe<string>

	slug_contains?: Maybe<string>

	slug_not_contains?: Maybe<string>

	slug_starts_with?: Maybe<string>

	slug_not_starts_with?: Maybe<string>

	slug_ends_with?: Maybe<string>

	slug_not_ends_with?: Maybe<string>

	moderators_every?: Maybe<UserWhereInput>

	moderators_some?: Maybe<UserWhereInput>

	moderators_none?: Maybe<UserWhereInput>

	public?: Maybe<boolean>

	public_not?: Maybe<boolean>

	messages_every?: Maybe<MessageWhereInput>

	messages_some?: Maybe<MessageWhereInput>

	messages_none?: Maybe<MessageWhereInput>

	teamId?: Maybe<string>

	teamId_not?: Maybe<string>

	teamId_in?: Maybe<string[]>

	teamId_not_in?: Maybe<string[]>

	teamId_lt?: Maybe<string>

	teamId_lte?: Maybe<string>

	teamId_gt?: Maybe<string>

	teamId_gte?: Maybe<string>

	teamId_contains?: Maybe<string>

	teamId_not_contains?: Maybe<string>

	teamId_starts_with?: Maybe<string>

	teamId_not_starts_with?: Maybe<string>

	teamId_ends_with?: Maybe<string>

	teamId_not_ends_with?: Maybe<string>

	members_every?: Maybe<UserWhereInput>

	members_some?: Maybe<UserWhereInput>

	members_none?: Maybe<UserWhereInput>

	author?: Maybe<UserWhereInput>

	createdAt?: Maybe<DateTime>

	createdAt_not?: Maybe<DateTime>

	createdAt_in?: Maybe<DateTime[]>

	createdAt_not_in?: Maybe<DateTime[]>

	createdAt_lt?: Maybe<DateTime>

	createdAt_lte?: Maybe<DateTime>

	createdAt_gt?: Maybe<DateTime>

	createdAt_gte?: Maybe<DateTime>

	updatedAt?: Maybe<DateTime>

	updatedAt_not?: Maybe<DateTime>

	updatedAt_in?: Maybe<DateTime[]>

	updatedAt_not_in?: Maybe<DateTime[]>

	updatedAt_lt?: Maybe<DateTime>

	updatedAt_lte?: Maybe<DateTime>

	updatedAt_gt?: Maybe<DateTime>

	updatedAt_gte?: Maybe<DateTime>

	AND?: Maybe<ChannelWhereInput[]>

	OR?: Maybe<ChannelWhereInput[]>

	NOT?: Maybe<ChannelWhereInput[]>
}

export interface FileWhereInput {
	id?: Maybe<string>

	id_not?: Maybe<string>

	id_in?: Maybe<string[]>

	id_not_in?: Maybe<string[]>

	id_lt?: Maybe<string>

	id_lte?: Maybe<string>

	id_gt?: Maybe<string>

	id_gte?: Maybe<string>

	id_contains?: Maybe<string>

	id_not_contains?: Maybe<string>

	id_starts_with?: Maybe<string>

	id_not_starts_with?: Maybe<string>

	id_ends_with?: Maybe<string>

	id_not_ends_with?: Maybe<string>

	createdAt?: Maybe<DateTime>

	createdAt_not?: Maybe<DateTime>

	createdAt_in?: Maybe<DateTime[]>

	createdAt_not_in?: Maybe<DateTime[]>

	createdAt_lt?: Maybe<DateTime>

	createdAt_lte?: Maybe<DateTime>

	createdAt_gt?: Maybe<DateTime>

	createdAt_gte?: Maybe<DateTime>

	updatedAt?: Maybe<DateTime>

	updatedAt_not?: Maybe<DateTime>

	updatedAt_in?: Maybe<DateTime[]>

	updatedAt_not_in?: Maybe<DateTime[]>

	updatedAt_lt?: Maybe<DateTime>

	updatedAt_lte?: Maybe<DateTime>

	updatedAt_gt?: Maybe<DateTime>

	updatedAt_gte?: Maybe<DateTime>

	filename?: Maybe<string>

	filename_not?: Maybe<string>

	filename_in?: Maybe<string[]>

	filename_not_in?: Maybe<string[]>

	filename_lt?: Maybe<string>

	filename_lte?: Maybe<string>

	filename_gt?: Maybe<string>

	filename_gte?: Maybe<string>

	filename_contains?: Maybe<string>

	filename_not_contains?: Maybe<string>

	filename_starts_with?: Maybe<string>

	filename_not_starts_with?: Maybe<string>

	filename_ends_with?: Maybe<string>

	filename_not_ends_with?: Maybe<string>

	mimetype?: Maybe<string>

	mimetype_not?: Maybe<string>

	mimetype_in?: Maybe<string[]>

	mimetype_not_in?: Maybe<string[]>

	mimetype_lt?: Maybe<string>

	mimetype_lte?: Maybe<string>

	mimetype_gt?: Maybe<string>

	mimetype_gte?: Maybe<string>

	mimetype_contains?: Maybe<string>

	mimetype_not_contains?: Maybe<string>

	mimetype_starts_with?: Maybe<string>

	mimetype_not_starts_with?: Maybe<string>

	mimetype_ends_with?: Maybe<string>

	mimetype_not_ends_with?: Maybe<string>

	encoding?: Maybe<string>

	encoding_not?: Maybe<string>

	encoding_in?: Maybe<string[]>

	encoding_not_in?: Maybe<string[]>

	encoding_lt?: Maybe<string>

	encoding_lte?: Maybe<string>

	encoding_gt?: Maybe<string>

	encoding_gte?: Maybe<string>

	encoding_contains?: Maybe<string>

	encoding_not_contains?: Maybe<string>

	encoding_starts_with?: Maybe<string>

	encoding_not_starts_with?: Maybe<string>

	encoding_ends_with?: Maybe<string>

	encoding_not_ends_with?: Maybe<string>

	key?: Maybe<string>

	key_not?: Maybe<string>

	key_in?: Maybe<string[]>

	key_not_in?: Maybe<string[]>

	key_lt?: Maybe<string>

	key_lte?: Maybe<string>

	key_gt?: Maybe<string>

	key_gte?: Maybe<string>

	key_contains?: Maybe<string>

	key_not_contains?: Maybe<string>

	key_starts_with?: Maybe<string>

	key_not_starts_with?: Maybe<string>

	key_ends_with?: Maybe<string>

	key_not_ends_with?: Maybe<string>

	ETag?: Maybe<string>

	ETag_not?: Maybe<string>

	ETag_in?: Maybe<string[]>

	ETag_not_in?: Maybe<string[]>

	ETag_lt?: Maybe<string>

	ETag_lte?: Maybe<string>

	ETag_gt?: Maybe<string>

	ETag_gte?: Maybe<string>

	ETag_contains?: Maybe<string>

	ETag_not_contains?: Maybe<string>

	ETag_starts_with?: Maybe<string>

	ETag_not_starts_with?: Maybe<string>

	ETag_ends_with?: Maybe<string>

	ETag_not_ends_with?: Maybe<string>

	url?: Maybe<string>

	url_not?: Maybe<string>

	url_in?: Maybe<string[]>

	url_not_in?: Maybe<string[]>

	url_lt?: Maybe<string>

	url_lte?: Maybe<string>

	url_gt?: Maybe<string>

	url_gte?: Maybe<string>

	url_contains?: Maybe<string>

	url_not_contains?: Maybe<string>

	url_starts_with?: Maybe<string>

	url_not_starts_with?: Maybe<string>

	url_ends_with?: Maybe<string>

	url_not_ends_with?: Maybe<string>

	AND?: Maybe<FileWhereInput[]>

	OR?: Maybe<FileWhereInput[]>

	NOT?: Maybe<FileWhereInput[]>
}

export interface ApiServiceWhereInput {
	id?: Maybe<string>

	id_not?: Maybe<string>

	id_in?: Maybe<string[]>

	id_not_in?: Maybe<string[]>

	id_lt?: Maybe<string>

	id_lte?: Maybe<string>

	id_gt?: Maybe<string>

	id_gte?: Maybe<string>

	id_contains?: Maybe<string>

	id_not_contains?: Maybe<string>

	id_starts_with?: Maybe<string>

	id_not_starts_with?: Maybe<string>

	id_ends_with?: Maybe<string>

	id_not_ends_with?: Maybe<string>

	settings?: Maybe<ApiServiceSettingsWhereInput>

	name?: Maybe<string>

	name_not?: Maybe<string>

	name_in?: Maybe<string[]>

	name_not_in?: Maybe<string[]>

	name_lt?: Maybe<string>

	name_lte?: Maybe<string>

	name_gt?: Maybe<string>

	name_gte?: Maybe<string>

	name_contains?: Maybe<string>

	name_not_contains?: Maybe<string>

	name_starts_with?: Maybe<string>

	name_not_starts_with?: Maybe<string>

	name_ends_with?: Maybe<string>

	name_not_ends_with?: Maybe<string>

	commentAPIs_every?: Maybe<CommentApiWhereInput>

	commentAPIs_some?: Maybe<CommentApiWhereInput>

	commentAPIs_none?: Maybe<CommentApiWhereInput>

	owner?: Maybe<UserWhereInput>

	createdAt?: Maybe<DateTime>

	createdAt_not?: Maybe<DateTime>

	createdAt_in?: Maybe<DateTime[]>

	createdAt_not_in?: Maybe<DateTime[]>

	createdAt_lt?: Maybe<DateTime>

	createdAt_lte?: Maybe<DateTime>

	createdAt_gt?: Maybe<DateTime>

	createdAt_gte?: Maybe<DateTime>

	updatedAt?: Maybe<DateTime>

	updatedAt_not?: Maybe<DateTime>

	updatedAt_in?: Maybe<DateTime[]>

	updatedAt_not_in?: Maybe<DateTime[]>

	updatedAt_lt?: Maybe<DateTime>

	updatedAt_lte?: Maybe<DateTime>

	updatedAt_gt?: Maybe<DateTime>

	updatedAt_gte?: Maybe<DateTime>

	AND?: Maybe<ApiServiceWhereInput[]>

	OR?: Maybe<ApiServiceWhereInput[]>

	NOT?: Maybe<ApiServiceWhereInput[]>
}

export interface ApiServiceSettingsWhereInput {
	id?: Maybe<string>

	id_not?: Maybe<string>

	id_in?: Maybe<string[]>

	id_not_in?: Maybe<string[]>

	id_lt?: Maybe<string>

	id_lte?: Maybe<string>

	id_gt?: Maybe<string>

	id_gte?: Maybe<string>

	id_contains?: Maybe<string>

	id_not_contains?: Maybe<string>

	id_starts_with?: Maybe<string>

	id_not_starts_with?: Maybe<string>

	id_ends_with?: Maybe<string>

	id_not_ends_with?: Maybe<string>

	enforceHTTPS?: Maybe<boolean>

	enforceHTTPS_not?: Maybe<boolean>

	AND?: Maybe<ApiServiceSettingsWhereInput[]>

	OR?: Maybe<ApiServiceSettingsWhereInput[]>

	NOT?: Maybe<ApiServiceSettingsWhereInput[]>
}

export interface CommentApiWhereInput {
	id?: Maybe<string>

	id_not?: Maybe<string>

	id_in?: Maybe<string[]>

	id_not_in?: Maybe<string[]>

	id_lt?: Maybe<string>

	id_lte?: Maybe<string>

	id_gt?: Maybe<string>

	id_gte?: Maybe<string>

	id_contains?: Maybe<string>

	id_not_contains?: Maybe<string>

	id_starts_with?: Maybe<string>

	id_not_starts_with?: Maybe<string>

	id_ends_with?: Maybe<string>

	id_not_ends_with?: Maybe<string>

	name?: Maybe<string>

	name_not?: Maybe<string>

	name_in?: Maybe<string[]>

	name_not_in?: Maybe<string[]>

	name_lt?: Maybe<string>

	name_lte?: Maybe<string>

	name_gt?: Maybe<string>

	name_gte?: Maybe<string>

	name_contains?: Maybe<string>

	name_not_contains?: Maybe<string>

	name_starts_with?: Maybe<string>

	name_not_starts_with?: Maybe<string>

	name_ends_with?: Maybe<string>

	name_not_ends_with?: Maybe<string>

	commentSections_every?: Maybe<CommentSectionWhereInput>

	commentSections_some?: Maybe<CommentSectionWhereInput>

	commentSections_none?: Maybe<CommentSectionWhereInput>

	createdAt?: Maybe<DateTime>

	createdAt_not?: Maybe<DateTime>

	createdAt_in?: Maybe<DateTime[]>

	createdAt_not_in?: Maybe<DateTime[]>

	createdAt_lt?: Maybe<DateTime>

	createdAt_lte?: Maybe<DateTime>

	createdAt_gt?: Maybe<DateTime>

	createdAt_gte?: Maybe<DateTime>

	updatedAt?: Maybe<DateTime>

	updatedAt_not?: Maybe<DateTime>

	updatedAt_in?: Maybe<DateTime[]>

	updatedAt_not_in?: Maybe<DateTime[]>

	updatedAt_lt?: Maybe<DateTime>

	updatedAt_lte?: Maybe<DateTime>

	updatedAt_gt?: Maybe<DateTime>

	updatedAt_gte?: Maybe<DateTime>

	owner?: Maybe<UserWhereInput>

	consumerKey?: Maybe<string>

	consumerKey_not?: Maybe<string>

	consumerKey_in?: Maybe<string[]>

	consumerKey_not_in?: Maybe<string[]>

	consumerKey_lt?: Maybe<string>

	consumerKey_lte?: Maybe<string>

	consumerKey_gt?: Maybe<string>

	consumerKey_gte?: Maybe<string>

	consumerKey_contains?: Maybe<string>

	consumerKey_not_contains?: Maybe<string>

	consumerKey_starts_with?: Maybe<string>

	consumerKey_not_starts_with?: Maybe<string>

	consumerKey_ends_with?: Maybe<string>

	consumerKey_not_ends_with?: Maybe<string>

	privateKey?: Maybe<string>

	privateKey_not?: Maybe<string>

	privateKey_in?: Maybe<string[]>

	privateKey_not_in?: Maybe<string[]>

	privateKey_lt?: Maybe<string>

	privateKey_lte?: Maybe<string>

	privateKey_gt?: Maybe<string>

	privateKey_gte?: Maybe<string>

	privateKey_contains?: Maybe<string>

	privateKey_not_contains?: Maybe<string>

	privateKey_starts_with?: Maybe<string>

	privateKey_not_starts_with?: Maybe<string>

	privateKey_ends_with?: Maybe<string>

	privateKey_not_ends_with?: Maybe<string>

	AND?: Maybe<CommentApiWhereInput[]>

	OR?: Maybe<CommentApiWhereInput[]>

	NOT?: Maybe<CommentApiWhereInput[]>
}

export interface RatingWhereInput {
	id?: Maybe<string>

	id_not?: Maybe<string>

	id_in?: Maybe<string[]>

	id_not_in?: Maybe<string[]>

	id_lt?: Maybe<string>

	id_lte?: Maybe<string>

	id_gt?: Maybe<string>

	id_gte?: Maybe<string>

	id_contains?: Maybe<string>

	id_not_contains?: Maybe<string>

	id_starts_with?: Maybe<string>

	id_not_starts_with?: Maybe<string>

	id_ends_with?: Maybe<string>

	id_not_ends_with?: Maybe<string>

	vote?: Maybe<number>

	vote_not?: Maybe<number>

	vote_in?: Maybe<number[]>

	vote_not_in?: Maybe<number[]>

	vote_lt?: Maybe<number>

	vote_lte?: Maybe<number>

	vote_gt?: Maybe<number>

	vote_gte?: Maybe<number>

	author_every?: Maybe<UserWhereInput>

	author_some?: Maybe<UserWhereInput>

	author_none?: Maybe<UserWhereInput>

	AND?: Maybe<RatingWhereInput[]>

	OR?: Maybe<RatingWhereInput[]>

	NOT?: Maybe<RatingWhereInput[]>
}

export interface ModeratorWhereInput {
	id?: Maybe<string>

	id_not?: Maybe<string>

	id_in?: Maybe<string[]>

	id_not_in?: Maybe<string[]>

	id_lt?: Maybe<string>

	id_lte?: Maybe<string>

	id_gt?: Maybe<string>

	id_gte?: Maybe<string>

	id_contains?: Maybe<string>

	id_not_contains?: Maybe<string>

	id_starts_with?: Maybe<string>

	id_not_starts_with?: Maybe<string>

	id_ends_with?: Maybe<string>

	id_not_ends_with?: Maybe<string>

	user?: Maybe<UserWhereInput>

	can_delete?: Maybe<boolean>

	can_delete_not?: Maybe<boolean>

	can_ban?: Maybe<boolean>

	can_ban_not?: Maybe<boolean>

	can_edit?: Maybe<boolean>

	can_edit_not?: Maybe<boolean>

	can_close?: Maybe<boolean>

	can_close_not?: Maybe<boolean>

	createdAt?: Maybe<DateTime>

	createdAt_not?: Maybe<DateTime>

	createdAt_in?: Maybe<DateTime[]>

	createdAt_not_in?: Maybe<DateTime[]>

	createdAt_lt?: Maybe<DateTime>

	createdAt_lte?: Maybe<DateTime>

	createdAt_gt?: Maybe<DateTime>

	createdAt_gte?: Maybe<DateTime>

	updatedAt?: Maybe<DateTime>

	updatedAt_not?: Maybe<DateTime>

	updatedAt_in?: Maybe<DateTime[]>

	updatedAt_not_in?: Maybe<DateTime[]>

	updatedAt_lt?: Maybe<DateTime>

	updatedAt_lte?: Maybe<DateTime>

	updatedAt_gt?: Maybe<DateTime>

	updatedAt_gte?: Maybe<DateTime>

	AND?: Maybe<ModeratorWhereInput[]>

	OR?: Maybe<ModeratorWhereInput[]>

	NOT?: Maybe<ModeratorWhereInput[]>
}

export interface CommentOptionsWhereInput {
	comments_open?: Maybe<boolean>

	comments_open_not?: Maybe<boolean>

	AND?: Maybe<CommentOptionsWhereInput[]>

	OR?: Maybe<CommentOptionsWhereInput[]>

	NOT?: Maybe<CommentOptionsWhereInput[]>
}

export enum UserRole {
	Admin = 'ADMIN',
	Moderator = 'MODERATOR',
	User = 'USER'
}

export enum CommentSectionOrderByInput {
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	PageIdAsc = 'pageId_ASC',
	PageIdDesc = 'pageId_DESC',
	UrlAsc = 'url_ASC',
	UrlDesc = 'url_DESC',
	CreatedAtAsc = 'createdAt_ASC',
	CreatedAtDesc = 'createdAt_DESC',
	UpdatedAtAsc = 'updatedAt_ASC',
	UpdatedAtDesc = 'updatedAt_DESC'
}

export enum CommentOrderByInput {
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	BodyAsc = 'body_ASC',
	BodyDesc = 'body_DESC',
	ParentIdAsc = 'parentId_ASC',
	ParentIdDesc = 'parentId_DESC',
	PageIdAsc = 'pageId_ASC',
	PageIdDesc = 'pageId_DESC',
	CreatedAtAsc = 'createdAt_ASC',
	CreatedAtDesc = 'createdAt_DESC',
	UpdatedAtAsc = 'updatedAt_ASC',
	UpdatedAtDesc = 'updatedAt_DESC'
}

export enum NotificationOrderByInput {
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	MessageAsc = 'message_ASC',
	MessageDesc = 'message_DESC',
	CreatedAtAsc = 'createdAt_ASC',
	CreatedAtDesc = 'createdAt_DESC',
	UpdatedAtAsc = 'updatedAt_ASC',
	UpdatedAtDesc = 'updatedAt_DESC'
}

export enum UserOrderByInput {
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	EmailAsc = 'email_ASC',
	EmailDesc = 'email_DESC',
	SetPrivateAsc = 'set_private_ASC',
	SetPrivateDesc = 'set_private_DESC',
	UsernameAsc = 'username_ASC',
	UsernameDesc = 'username_DESC',
	PasswordAsc = 'password_ASC',
	PasswordDesc = 'password_DESC',
	GitHubIdAsc = 'gitHubId_ASC',
	GitHubIdDesc = 'gitHubId_DESC',
	FacebookIdAsc = 'facebookId_ASC',
	FacebookIdDesc = 'facebookId_DESC',
	TwitterIdAsc = 'twitterId_ASC',
	TwitterIdDesc = 'twitterId_DESC',
	GmailIdAsc = 'gmailId_ASC',
	GmailIdDesc = 'gmailId_DESC',
	PrivateAsc = 'private_ASC',
	PrivateDesc = 'private_DESC',
	ConfirmedAsc = 'confirmed_ASC',
	ConfirmedDesc = 'confirmed_DESC',
	OnlineAsc = 'online_ASC',
	OnlineDesc = 'online_DESC',
	CreatedAtAsc = 'createdAt_ASC',
	CreatedAtDesc = 'createdAt_DESC',
	UpdatedAtAsc = 'updatedAt_ASC',
	UpdatedAtDesc = 'updatedAt_DESC',
	RoleAsc = 'role_ASC',
	RoleDesc = 'role_DESC'
}

export enum ChannelOrderByInput {
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	NameAsc = 'name_ASC',
	NameDesc = 'name_DESC',
	SlugAsc = 'slug_ASC',
	SlugDesc = 'slug_DESC',
	PublicAsc = 'public_ASC',
	PublicDesc = 'public_DESC',
	TeamIdAsc = 'teamId_ASC',
	TeamIdDesc = 'teamId_DESC',
	CreatedAtAsc = 'createdAt_ASC',
	CreatedAtDesc = 'createdAt_DESC',
	UpdatedAtAsc = 'updatedAt_ASC',
	UpdatedAtDesc = 'updatedAt_DESC'
}

export enum MessageOrderByInput {
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	BodyAsc = 'body_ASC',
	BodyDesc = 'body_DESC',
	ParentIdAsc = 'parentId_ASC',
	ParentIdDesc = 'parentId_DESC',
	UrlAsc = 'url_ASC',
	UrlDesc = 'url_DESC',
	FiletypeAsc = 'filetype_ASC',
	FiletypeDesc = 'filetype_DESC',
	CreatedAtAsc = 'createdAt_ASC',
	CreatedAtDesc = 'createdAt_DESC',
	UpdatedAtAsc = 'updatedAt_ASC',
	UpdatedAtDesc = 'updatedAt_DESC'
}

export enum TeamOrderByInput {
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	NameAsc = 'name_ASC',
	NameDesc = 'name_DESC',
	SlugAsc = 'slug_ASC',
	SlugDesc = 'slug_DESC',
	CreatedAtAsc = 'createdAt_ASC',
	CreatedAtDesc = 'createdAt_DESC',
	UpdatedAtAsc = 'updatedAt_ASC',
	UpdatedAtDesc = 'updatedAt_DESC',
	ConfirmedAsc = 'confirmed_ASC',
	ConfirmedDesc = 'confirmed_DESC',
	OnlineAsc = 'online_ASC',
	OnlineDesc = 'online_DESC'
}

export enum ApiServiceOrderByInput {
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	NameAsc = 'name_ASC',
	NameDesc = 'name_DESC',
	CreatedAtAsc = 'createdAt_ASC',
	CreatedAtDesc = 'createdAt_DESC',
	UpdatedAtAsc = 'updatedAt_ASC',
	UpdatedAtDesc = 'updatedAt_DESC'
}

export enum CommentApiOrderByInput {
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	NameAsc = 'name_ASC',
	NameDesc = 'name_DESC',
	CreatedAtAsc = 'createdAt_ASC',
	CreatedAtDesc = 'createdAt_DESC',
	UpdatedAtAsc = 'updatedAt_ASC',
	UpdatedAtDesc = 'updatedAt_DESC',
	ConsumerKeyAsc = 'consumerKey_ASC',
	ConsumerKeyDesc = 'consumerKey_DESC',
	PrivateKeyAsc = 'privateKey_ASC',
	PrivateKeyDesc = 'privateKey_DESC'
}

export enum ModeratorOrderByInput {
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	CanDeleteAsc = 'can_delete_ASC',
	CanDeleteDesc = 'can_delete_DESC',
	CanBanAsc = 'can_ban_ASC',
	CanBanDesc = 'can_ban_DESC',
	CanEditAsc = 'can_edit_ASC',
	CanEditDesc = 'can_edit_DESC',
	CanCloseAsc = 'can_close_ASC',
	CanCloseDesc = 'can_close_DESC',
	CreatedAtAsc = 'createdAt_ASC',
	CreatedAtDesc = 'createdAt_DESC',
	UpdatedAtAsc = 'updatedAt_ASC',
	UpdatedAtDesc = 'updatedAt_DESC'
}

export type DateTime = any

// ====================================================
// Documents
// ====================================================

export type CreateApiServiceVariables = {
	name: string
}

export type CreateApiServiceMutation = {
	__typename?: 'Mutation'

	createApiService: Maybe<CreateApiServiceCreateApiService>
}

export type CreateApiServiceCreateApiService = {
	__typename?: 'APIService'

	id: string

	name: string

	commentAPIs: Maybe<CreateApiServiceCommentApIs[]>

	owner: CreateApiService_Owner

	createdAt: DateTime

	updatedAt: DateTime
}

export type CreateApiServiceCommentApIs = {
	__typename?: 'CommentAPI'

	id: string

	name: string

	commentSections: Maybe<CreateApiServiceCommentSections[]>

	createdAt: DateTime

	updatedAt: DateTime

	owner: CreateApiServiceOwner

	consumerKey: string

	privateKey: string
}

export type CreateApiServiceCommentSections = {
	__typename?: 'CommentSection'

	id: string
}

export type CreateApiServiceOwner = {
	__typename?: 'User'

	id: string

	username: string

	email: Maybe<string>
}

export type CreateApiService_Owner = {
	__typename?: 'User'

	id: string

	username: string

	email: Maybe<string>
}

export type FetchCommentApiVariables = {
	id: string
}

export type FetchCommentApiQuery = {
	__typename?: 'Query'

	fetchCommentAPI: Maybe<FetchCommentApiFetchCommentApi>
}

export type FetchCommentApiFetchCommentApi = {
	__typename?: 'CommentAPI'

	id: string

	name: string

	commentSections: Maybe<FetchCommentApiCommentSections[]>

	createdAt: DateTime

	updatedAt: DateTime

	owner: FetchCommentApiOwner

	consumerKey: string

	privateKey: string
}

export type FetchCommentApiCommentSections = {
	__typename?: 'CommentSection'

	id: string

	pageId: string

	url: string

	admin: FetchCommentApiAdmin

	moderators: Maybe<FetchCommentApiModerators[]>

	options: FetchCommentApiOptions

	bannedUsers: Maybe<FetchCommentApiBannedUsers[]>

	createdAt: DateTime

	updatedAt: DateTime
}

export type FetchCommentApiAdmin = {
	__typename?: 'User'

	id: string

	username: string

	email: Maybe<string>
}

export type FetchCommentApiModerators = {
	__typename?: 'Moderator'

	id: string

	user: FetchCommentApiUser
}

export type FetchCommentApiUser = {
	__typename?: 'User'

	id: string

	username: string

	email: Maybe<string>
}

export type FetchCommentApiOptions = {
	__typename?: 'CommentOptions'

	comments_open: boolean
}

export type FetchCommentApiBannedUsers = {
	__typename?: 'User'

	id: string

	username: string

	email: Maybe<string>
}

export type FetchCommentApiOwner = {
	__typename?: 'User'

	id: string

	username: string

	email: Maybe<string>
}

export type CreateCommentApiVariables = {
	name: string
	serviceId: string
}

export type CreateCommentApiMutation = {
	__typename?: 'Mutation'

	createCommentApi: CreateCommentApiCreateCommentApi
}

export type CreateCommentApiCreateCommentApi = {
	__typename?: 'CreateCommentAPIResponse'

	commentAPI: Maybe<CreateCommentApiCommentApi>

	privateKey: string
}

export type CreateCommentApiCommentApi = CommentApiFragmentFragment

export type FetchCommentApisVariables = {}

export type FetchCommentApisQuery = {
	__typename?: 'Query'

	fetchCommentAPIs: Maybe<(Maybe<FetchCommentApisFetchCommentApIs>)[]>
}

export type FetchCommentApisFetchCommentApIs = {
	__typename?: 'CommentAPI'

	id: string

	name: string

	commentSections: Maybe<FetchCommentApisCommentSections[]>

	createdAt: DateTime

	updatedAt: DateTime

	owner: FetchCommentApisOwner

	consumerKey: string

	privateKey: string
}

export type FetchCommentApisCommentSections = {
	__typename?: 'CommentSection'

	id: string

	pageId: string

	url: string

	admin: FetchCommentApisAdmin

	moderators: Maybe<FetchCommentApisModerators[]>

	options: FetchCommentApisOptions

	bannedUsers: Maybe<FetchCommentApisBannedUsers[]>

	createdAt: DateTime

	updatedAt: DateTime
}

export type FetchCommentApisAdmin = {
	__typename?: 'User'

	id: string

	username: string

	email: Maybe<string>
}

export type FetchCommentApisModerators = {
	__typename?: 'Moderator'

	id: string

	user: FetchCommentApisUser
}

export type FetchCommentApisUser = {
	__typename?: 'User'

	id: string

	username: string

	email: Maybe<string>
}

export type FetchCommentApisOptions = {
	__typename?: 'CommentOptions'

	comments_open: boolean
}

export type FetchCommentApisBannedUsers = {
	__typename?: 'User'

	id: string

	username: string

	email: Maybe<string>
}

export type FetchCommentApisOwner = {
	__typename?: 'User'

	id: string

	username: string

	email: Maybe<string>
}

export type FetchApiServicesVariables = {}

export type FetchApiServicesQuery = {
	__typename?: 'Query'

	fetchApiServices: Maybe<FetchApiServicesFetchApiServices[]>
}

export type FetchApiServicesFetchApiServices = {
	__typename?: 'APIService'

	id: string

	name: string

	commentAPIs: Maybe<FetchApiServicesCommentApIs[]>

	owner: FetchApiServices_Owner

	createdAt: DateTime

	updatedAt: DateTime
}

export type FetchApiServicesCommentApIs = {
	__typename?: 'CommentAPI'

	id: string

	name: string

	commentSections: Maybe<FetchApiServicesCommentSections[]>

	createdAt: DateTime

	updatedAt: DateTime

	owner: FetchApiServicesOwner

	consumerKey: string

	privateKey: string
}

export type FetchApiServicesCommentSections = {
	__typename?: 'CommentSection'

	id: string
}

export type FetchApiServicesOwner = {
	__typename?: 'User'

	id: string

	username: string

	email: Maybe<string>
}

export type FetchApiServices_Owner = {
	__typename?: 'User'

	username: string

	id: string
}

export type FetchApiServiceVariables = {
	id: string
}

export type FetchApiServiceQuery = {
	__typename?: 'Query'

	fetchApiService: Maybe<FetchApiServiceFetchApiService>
}

export type FetchApiServiceFetchApiService = {
	__typename?: 'APIService'

	id: string

	name: string

	commentAPIs: Maybe<FetchApiServiceCommentApIs[]>

	owner: FetchApiService_Owner

	createdAt: DateTime

	updatedAt: DateTime
}

export type FetchApiServiceCommentApIs = {
	__typename?: 'CommentAPI'

	id: string

	name: string

	commentSections: Maybe<FetchApiServiceCommentSections[]>

	createdAt: DateTime

	updatedAt: DateTime

	owner: FetchApiServiceOwner

	consumerKey: string

	privateKey: string
}

export type FetchApiServiceCommentSections = {
	__typename?: 'CommentSection'

	id: string
}

export type FetchApiServiceOwner = {
	__typename?: 'User'

	id: string

	username: string

	email: Maybe<string>
}

export type FetchApiService_Owner = {
	__typename?: 'User'

	username: string

	id: string
}

export type CommentApiFragmentFragment = {
	__typename?: 'CommentAPI'

	id: string

	name: string

	commentSections: Maybe<CommentApiFragmentCommentSections[]>

	createdAt: DateTime

	updatedAt: DateTime

	owner: CommentApiFragmentOwner

	consumerKey: string

	privateKey: string
}

export type CommentApiFragmentCommentSections = {
	__typename?: 'CommentSection'

	id: string

	pageId: string

	url: string

	admin: CommentApiFragmentAdmin

	moderators: Maybe<CommentApiFragmentModerators[]>

	options: CommentApiFragmentOptions

	bannedUsers: Maybe<CommentApiFragmentBannedUsers[]>

	createdAt: DateTime

	updatedAt: DateTime
}

export type CommentApiFragmentAdmin = {
	__typename?: 'User'

	id: string

	username: string

	email: Maybe<string>
}

export type CommentApiFragmentModerators = {
	__typename?: 'Moderator'

	id: string

	user: CommentApiFragmentUser
}

export type CommentApiFragmentUser = {
	__typename?: 'User'

	id: string

	username: string

	email: Maybe<string>
}

export type CommentApiFragmentOptions = {
	__typename?: 'CommentOptions'

	comments_open: boolean
}

export type CommentApiFragmentBannedUsers = {
	__typename?: 'User'

	id: string

	username: string

	email: Maybe<string>
}

export type CommentApiFragmentOwner = {
	__typename?: 'User'

	id: string

	username: string

	email: Maybe<string>
}

import gql from 'graphql-tag'
import * as React from 'react'
import * as ReactApollo from 'react-apollo'

// ====================================================
// Fragments
// ====================================================

export const CommentApiFragmentFragmentDoc = gql`
	fragment CommentAPIFragment on CommentAPI {
		id
		name
		commentSections {
			id
			pageId
			url
			admin {
				id
				username
				email
			}
			moderators {
				id
				user {
					id
					username
					email
				}
			}
			options {
				comments_open
			}
			bannedUsers {
				id
				username
				email
			}
			createdAt
			updatedAt
		}
		createdAt
		updatedAt
		owner {
			id
			username
			email
		}
		consumerKey
		privateKey
	}
`

// ====================================================
// Components
// ====================================================

export const CreateApiServiceDocument = gql`
	mutation CreateAPIService($name: String!) {
		createApiService(name: $name) {
			id
			name
			commentAPIs {
				id
				name
				commentSections {
					id
				}
				createdAt
				updatedAt
				owner {
					id
					username
					email
				}
				consumerKey
				privateKey
			}
			owner {
				id
				username
				email
			}
			createdAt
			updatedAt
		}
	}
`
export class CreateApiServiceComponent extends React.Component<
	Partial<ReactApollo.MutationProps<CreateApiServiceMutation, CreateApiServiceVariables>>
> {
	render() {
		return (
			<ReactApollo.Mutation<CreateApiServiceMutation, CreateApiServiceVariables>
				mutation={CreateApiServiceDocument}
				{...(this as any)['props'] as any}
			/>
		)
	}
}
export type CreateApiServiceProps<TChildProps = any> = Partial<
	ReactApollo.MutateProps<CreateApiServiceMutation, CreateApiServiceVariables>
> &
	TChildProps
export type CreateApiServiceMutationFn = ReactApollo.MutationFn<
	CreateApiServiceMutation,
	CreateApiServiceVariables
>
export function CreateApiServiceHOC<TProps, TChildProps = any>(
	operationOptions:
		| ReactApollo.OperationOption<
				TProps,
				CreateApiServiceMutation,
				CreateApiServiceVariables,
				CreateApiServiceProps<TChildProps>
		  >
		| undefined
) {
	return ReactApollo.graphql<
		TProps,
		CreateApiServiceMutation,
		CreateApiServiceVariables,
		CreateApiServiceProps<TChildProps>
	>(CreateApiServiceDocument, operationOptions)
}
export const FetchCommentApiDocument = gql`
	query FetchCommentAPI($id: ID!) {
		fetchCommentAPI(id: $id) {
			id
			name
			commentSections {
				id
				pageId
				url
				admin {
					id
					username
					email
				}
				moderators {
					id
					user {
						id
						username
						email
					}
				}
				options {
					comments_open
				}
				bannedUsers {
					id
					username
					email
				}
				createdAt
				updatedAt
			}
			createdAt
			updatedAt
			owner {
				id
				username
				email
			}
			consumerKey
			privateKey
		}
	}
`
export class FetchCommentApiComponent extends React.Component<
	Partial<ReactApollo.QueryProps<FetchCommentApiQuery, FetchCommentApiVariables>>
> {
	render() {
		return (
			<ReactApollo.Query<FetchCommentApiQuery, FetchCommentApiVariables>
				query={FetchCommentApiDocument}
				{...(this as any)['props'] as any}
			/>
		)
	}
}
export type FetchCommentApiProps<TChildProps = any> = Partial<
	ReactApollo.DataProps<FetchCommentApiQuery, FetchCommentApiVariables>
> &
	TChildProps
export function FetchCommentApiHOC<TProps, TChildProps = any>(
	operationOptions:
		| ReactApollo.OperationOption<
				TProps,
				FetchCommentApiQuery,
				FetchCommentApiVariables,
				FetchCommentApiProps<TChildProps>
		  >
		| undefined
) {
	return ReactApollo.graphql<
		TProps,
		FetchCommentApiQuery,
		FetchCommentApiVariables,
		FetchCommentApiProps<TChildProps>
	>(FetchCommentApiDocument, operationOptions)
}
export const CreateCommentApiDocument = gql`
	mutation CreateCommentAPI($name: String!, $serviceId: ID!) {
		createCommentApi(name: $name, serviceId: $serviceId) {
			commentAPI {
				...CommentAPIFragment
			}
			privateKey
		}
	}

	${CommentApiFragmentFragmentDoc}
`
export class CreateCommentApiComponent extends React.Component<
	Partial<ReactApollo.MutationProps<CreateCommentApiMutation, CreateCommentApiVariables>>
> {
	render() {
		return (
			<ReactApollo.Mutation<CreateCommentApiMutation, CreateCommentApiVariables>
				mutation={CreateCommentApiDocument}
				{...(this as any)['props'] as any}
			/>
		)
	}
}
export type CreateCommentApiProps<TChildProps = any> = Partial<
	ReactApollo.MutateProps<CreateCommentApiMutation, CreateCommentApiVariables>
> &
	TChildProps
export type CreateCommentApiMutationFn = ReactApollo.MutationFn<
	CreateCommentApiMutation,
	CreateCommentApiVariables
>
export function CreateCommentApiHOC<TProps, TChildProps = any>(
	operationOptions:
		| ReactApollo.OperationOption<
				TProps,
				CreateCommentApiMutation,
				CreateCommentApiVariables,
				CreateCommentApiProps<TChildProps>
		  >
		| undefined
) {
	return ReactApollo.graphql<
		TProps,
		CreateCommentApiMutation,
		CreateCommentApiVariables,
		CreateCommentApiProps<TChildProps>
	>(CreateCommentApiDocument, operationOptions)
}
export const FetchCommentApisDocument = gql`
	query FetchCommentAPIS {
		fetchCommentAPIs {
			id
			name
			commentSections {
				id
				pageId
				url
				admin {
					id
					username
					email
				}
				moderators {
					id
					user {
						id
						username
						email
					}
				}
				options {
					comments_open
				}
				bannedUsers {
					id
					username
					email
				}
				createdAt
				updatedAt
			}
			createdAt
			updatedAt
			owner {
				id
				username
				email
			}
			consumerKey
			privateKey
		}
	}
`
export class FetchCommentApisComponent extends React.Component<
	Partial<ReactApollo.QueryProps<FetchCommentApisQuery, FetchCommentApisVariables>>
> {
	render() {
		return (
			<ReactApollo.Query<FetchCommentApisQuery, FetchCommentApisVariables>
				query={FetchCommentApisDocument}
				{...(this as any)['props'] as any}
			/>
		)
	}
}
export type FetchCommentApisProps<TChildProps = any> = Partial<
	ReactApollo.DataProps<FetchCommentApisQuery, FetchCommentApisVariables>
> &
	TChildProps
export function FetchCommentApisHOC<TProps, TChildProps = any>(
	operationOptions:
		| ReactApollo.OperationOption<
				TProps,
				FetchCommentApisQuery,
				FetchCommentApisVariables,
				FetchCommentApisProps<TChildProps>
		  >
		| undefined
) {
	return ReactApollo.graphql<
		TProps,
		FetchCommentApisQuery,
		FetchCommentApisVariables,
		FetchCommentApisProps<TChildProps>
	>(FetchCommentApisDocument, operationOptions)
}
export const FetchApiServicesDocument = gql`
	query FetchAPIServices {
		fetchApiServices {
			id
			name
			commentAPIs {
				id
				name
				commentSections {
					id
				}
				createdAt
				updatedAt
				owner {
					id
					username
					email
				}
				consumerKey
				privateKey
			}
			owner {
				username
				id
			}
			createdAt
			updatedAt
		}
	}
`
export class FetchApiServicesComponent extends React.Component<
	Partial<ReactApollo.QueryProps<FetchApiServicesQuery, FetchApiServicesVariables>>
> {
	render() {
		return (
			<ReactApollo.Query<FetchApiServicesQuery, FetchApiServicesVariables>
				query={FetchApiServicesDocument}
				{...(this as any)['props'] as any}
			/>
		)
	}
}
export type FetchApiServicesProps<TChildProps = any> = Partial<
	ReactApollo.DataProps<FetchApiServicesQuery, FetchApiServicesVariables>
> &
	TChildProps
export function FetchApiServicesHOC<TProps, TChildProps = any>(
	operationOptions:
		| ReactApollo.OperationOption<
				TProps,
				FetchApiServicesQuery,
				FetchApiServicesVariables,
				FetchApiServicesProps<TChildProps>
		  >
		| undefined
) {
	return ReactApollo.graphql<
		TProps,
		FetchApiServicesQuery,
		FetchApiServicesVariables,
		FetchApiServicesProps<TChildProps>
	>(FetchApiServicesDocument, operationOptions)
}
export const FetchApiServiceDocument = gql`
	query FetchAPIService($id: ID!) {
		fetchApiService(id: $id) {
			id
			name
			commentAPIs {
				id
				name
				commentSections {
					id
				}
				createdAt
				updatedAt
				owner {
					id
					username
					email
				}
				consumerKey
				privateKey
			}
			owner {
				username
				id
			}
			createdAt
			updatedAt
		}
	}
`
export class FetchApiServiceComponent extends React.Component<
	Partial<ReactApollo.QueryProps<FetchApiServiceQuery, FetchApiServiceVariables>>
> {
	render() {
		return (
			<ReactApollo.Query<FetchApiServiceQuery, FetchApiServiceVariables>
				query={FetchApiServiceDocument}
				{...(this as any)['props'] as any}
			/>
		)
	}
}
export type FetchApiServiceProps<TChildProps = any> = Partial<
	ReactApollo.DataProps<FetchApiServiceQuery, FetchApiServiceVariables>
> &
	TChildProps
export function FetchApiServiceHOC<TProps, TChildProps = any>(
	operationOptions:
		| ReactApollo.OperationOption<
				TProps,
				FetchApiServiceQuery,
				FetchApiServiceVariables,
				FetchApiServiceProps<TChildProps>
		  >
		| undefined
) {
	return ReactApollo.graphql<
		TProps,
		FetchApiServiceQuery,
		FetchApiServiceVariables,
		FetchApiServiceProps<TChildProps>
	>(FetchApiServiceDocument, operationOptions)
}
