// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from '@prismicio/client';

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type AboutDocumentDataSlicesSlice = SubTitleSlice | AboutImgSlice | TextBlockSlice;

/**
 * Content for about documents
 */
interface AboutDocumentData {
	/**
	 * Slice Zone field in *about*
	 *
	 * - **Field Type**: Slice Zone
	 * - **Placeholder**: *None*
	 * - **API ID Path**: about.slices[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#slices
	 */
	slices: prismic.SliceZone<AboutDocumentDataSlicesSlice>
	/**
	 * Meta Description field in *about*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A brief summary of the page
	 * - **API ID Path**: about.meta_description
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */;
	meta_description: prismic.KeyTextField;

	/**
	 * Meta Image field in *about*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: about.meta_image
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	meta_image: prismic.ImageField<never>;

	/**
	 * Meta Title field in *about*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A title of the page used for social media and search engines
	 * - **API ID Path**: about.meta_title
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	meta_title: prismic.KeyTextField;
}

/**
 * about document from Prismic
 *
 * - **API ID**: `about`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type AboutDocument<Lang extends string = string> = prismic.PrismicDocumentWithUID<
	Simplify<AboutDocumentData>,
	'about',
	Lang
>;

export type AllDocumentTypes = AboutDocument;

/**
 * Primary content in *AboutImg → Primary*
 */
export interface AboutImgSliceDefaultPrimary {
	/**
	 * aboutImg field in *AboutImg → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: about_img.primary.aboutImg
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	aboutImg: prismic.ImageField<never>;
}

/**
 * Default variation for AboutImg Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutImgSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<AboutImgSliceDefaultPrimary>,
	never
>;

/**
 * Slice variation for *AboutImg*
 */
type AboutImgSliceVariation = AboutImgSliceDefault;

/**
 * AboutImg Shared Slice
 *
 * - **API ID**: `about_img`
 * - **Description**: AboutImg
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutImgSlice = prismic.SharedSlice<'about_img', AboutImgSliceVariation>;

/**
 * Primary content in *SubTitle → Primary*
 */
export interface SubTitleSliceDefaultPrimary {
	/**
	 * Subtitle field in *SubTitle → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: who am i
	 * - **API ID Path**: sub_title.primary.subTitle
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	subTitle: prismic.RichTextField;
}

/**
 * Default variation for SubTitle Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SubTitleSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<SubTitleSliceDefaultPrimary>,
	never
>;

/**
 * Slice variation for *SubTitle*
 */
type SubTitleSliceVariation = SubTitleSliceDefault;

/**
 * SubTitle Shared Slice
 *
 * - **API ID**: `sub_title`
 * - **Description**: SubTitle
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SubTitleSlice = prismic.SharedSlice<'sub_title', SubTitleSliceVariation>;

/**
 * Primary content in *TextBlock → Primary*
 */
export interface TextBlockSliceDefaultPrimary {
	/**
	 * Textblock field in *TextBlock → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: text_block.primary.textblock
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	textblock: prismic.RichTextField;
}

/**
 * Default variation for TextBlock Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextBlockSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<TextBlockSliceDefaultPrimary>,
	never
>;

/**
 * Slice variation for *TextBlock*
 */
type TextBlockSliceVariation = TextBlockSliceDefault;

/**
 * TextBlock Shared Slice
 *
 * - **API ID**: `text_block`
 * - **Description**: TextBlock
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextBlockSlice = prismic.SharedSlice<'text_block', TextBlockSliceVariation>;

/**
 * Primary content in *Title → Primary*
 */
export interface TitleSliceDefaultPrimary {
	/**
	 * Welcome field in *Title → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: title.primary.welcome
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	welcome: prismic.RichTextField;
}

/**
 * Default variation for Title Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TitleSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<TitleSliceDefaultPrimary>,
	never
>;

/**
 * Slice variation for *Title*
 */
type TitleSliceVariation = TitleSliceDefault;

/**
 * Title Shared Slice
 *
 * - **API ID**: `title`
 * - **Description**: Title
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TitleSlice = prismic.SharedSlice<'title', TitleSliceVariation>;

declare module '@prismicio/client' {
	interface CreateClient {
		(
			repositoryNameOrEndpoint: string,
			options?: prismic.ClientConfig
		): prismic.Client<AllDocumentTypes>;
	}

	namespace Content {
		export type {
			AboutDocument,
			AboutDocumentData,
			AboutDocumentDataSlicesSlice,
			AllDocumentTypes,
			AboutImgSlice,
			AboutImgSliceDefaultPrimary,
			AboutImgSliceVariation,
			AboutImgSliceDefault,
			SubTitleSlice,
			SubTitleSliceDefaultPrimary,
			SubTitleSliceVariation,
			SubTitleSliceDefault,
			TextBlockSlice,
			TextBlockSliceDefaultPrimary,
			TextBlockSliceVariation,
			TextBlockSliceDefault,
			TitleSlice,
			TitleSliceDefaultPrimary,
			TitleSliceVariation,
			TitleSliceDefault
		};
	}
}
