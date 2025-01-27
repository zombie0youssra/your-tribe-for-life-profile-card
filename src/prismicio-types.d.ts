// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from '@prismicio/client';

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type IndexDocumentDataSlicesSlice =
	| InfoBlockSlice
	| SecTitleSlice
	| ListThingsSlice
	| TitleMainSlice;

/**
 * Content for index documents
 */
interface IndexDocumentData {
	/**
	 * name field in *index*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: index.name
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	name: prismic.KeyTextField;

	/**
	 * Slice Zone field in *index*
	 *
	 * - **Field Type**: Slice Zone
	 * - **Placeholder**: *None*
	 * - **API ID Path**: index.slices[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#slices
	 */
	slices: prismic.SliceZone<IndexDocumentDataSlicesSlice>
	/**
	 * Meta Description field in *index*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A brief summary of the page
	 * - **API ID Path**: index.meta_description
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */;
	meta_description: prismic.KeyTextField;

	/**
	 * Meta Image field in *index*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: index.meta_image
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	meta_image: prismic.ImageField<never>;

	/**
	 * Meta Title field in *index*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A title of the page used for social media and search engines
	 * - **API ID Path**: index.meta_title
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	meta_title: prismic.KeyTextField;
}

/**
 * index document from Prismic
 *
 * - **API ID**: `index`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type IndexDocument<Lang extends string = string> = prismic.PrismicDocumentWithUID<
	Simplify<IndexDocumentData>,
	'index',
	Lang
>;

export type AllDocumentTypes = IndexDocument;

/**
 * Primary content in *InfoBlock → Primary*
 */
export interface InfoBlockSliceDefaultPrimary {
	/**
	 * about field in *InfoBlock → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: info_block.primary.about
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	about: prismic.KeyTextField;

	/**
	 * myimg field in *InfoBlock → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: info_block.primary.myimg
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	myimg: prismic.ImageField<never>;
}

/**
 * Default variation for InfoBlock Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type InfoBlockSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<InfoBlockSliceDefaultPrimary>,
	never
>;

/**
 * Slice variation for *InfoBlock*
 */
type InfoBlockSliceVariation = InfoBlockSliceDefault;

/**
 * InfoBlock Shared Slice
 *
 * - **API ID**: `info_block`
 * - **Description**: InfoBlock
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type InfoBlockSlice = prismic.SharedSlice<'info_block', InfoBlockSliceVariation>;

/**
 * Primary content in *ListThings → Items*
 */
export interface ListThingsSliceDefaultItem {
	/**
	 * imgproof field in *ListThings → Items*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: list_things.items[].imgproof
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	imgproof: prismic.ImageField<never>;

	/**
	 * info field in *ListThings → Items*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: list_things.items[].info
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	info: prismic.KeyTextField;

	/**
	 * weblink field in *ListThings → Items*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: list_things.items[].weblink
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	weblink: prismic.LinkField;
}

/**
 * Default variation for ListThings Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ListThingsSliceDefault = prismic.SharedSliceVariation<
	'default',
	Record<string, never>,
	Simplify<ListThingsSliceDefaultItem>
>;

/**
 * Slice variation for *ListThings*
 */
type ListThingsSliceVariation = ListThingsSliceDefault;

/**
 * ListThings Shared Slice
 *
 * - **API ID**: `list_things`
 * - **Description**: ListThings
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ListThingsSlice = prismic.SharedSlice<'list_things', ListThingsSliceVariation>;

/**
 * Primary content in *SecTitle → Primary*
 */
export interface SecTitleSliceDefaultPrimary {
	/**
	 * sectitle field in *SecTitle → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: sec_title.primary.sectitle
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	sectitle: prismic.KeyTextField;
}

/**
 * Default variation for SecTitle Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SecTitleSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<SecTitleSliceDefaultPrimary>,
	never
>;

/**
 * Slice variation for *SecTitle*
 */
type SecTitleSliceVariation = SecTitleSliceDefault;

/**
 * SecTitle Shared Slice
 *
 * - **API ID**: `sec_title`
 * - **Description**: SecTitle
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SecTitleSlice = prismic.SharedSlice<'sec_title', SecTitleSliceVariation>;

/**
 * Primary content in *TitleMain → Primary*
 */
export interface TitleMainSliceDefaultPrimary {
	/**
	 * Name field in *TitleMain → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: title_main.primary.name
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	name: prismic.KeyTextField;
}

/**
 * Default variation for TitleMain Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TitleMainSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<TitleMainSliceDefaultPrimary>,
	never
>;

/**
 * Slice variation for *TitleMain*
 */
type TitleMainSliceVariation = TitleMainSliceDefault;

/**
 * TitleMain Shared Slice
 *
 * - **API ID**: `title_main`
 * - **Description**: TitleMain
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TitleMainSlice = prismic.SharedSlice<'title_main', TitleMainSliceVariation>;

declare module '@prismicio/client' {
	interface CreateClient {
		(
			repositoryNameOrEndpoint: string,
			options?: prismic.ClientConfig
		): prismic.Client<AllDocumentTypes>;
	}

	namespace Content {
		export type {
			IndexDocument,
			IndexDocumentData,
			IndexDocumentDataSlicesSlice,
			AllDocumentTypes,
			InfoBlockSlice,
			InfoBlockSliceDefaultPrimary,
			InfoBlockSliceVariation,
			InfoBlockSliceDefault,
			ListThingsSlice,
			ListThingsSliceDefaultItem,
			ListThingsSliceVariation,
			ListThingsSliceDefault,
			SecTitleSlice,
			SecTitleSliceDefaultPrimary,
			SecTitleSliceVariation,
			SecTitleSliceDefault,
			TitleMainSlice,
			TitleMainSliceDefaultPrimary,
			TitleMainSliceVariation,
			TitleMainSliceDefault
		};
	}
}
