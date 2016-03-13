import _ from 'lodash';
import React from 'react';

//core text
import TextRenderer from './widgets/TextRenderer';
import RichTextRenderer from './widgets/RichTextRenderer';
import JsxRenderer from './widgets/JsxRenderer';
import HtmlContent from './widgets/HtmlContent';
import ArticleContent from './widgets/ArticleContent';
import ListItemContent from './widgets/ListItemContent';

//core boxes
import BackgroundBox from './widgets/BackgroundBox';
import HtmlBox from './widgets/HtmlBox';
import HtmlImageBox from './widgets/HtmlImageBox';

//core image
import ImageBox from './widgets/ImageBox';
import SmartImageBox from './widgets/SmartImageBox';
import ATvImageBox from './widgets/ATvImageBox';


//flex box
import ImageFlexBox from './widgets/ImageFlexBox';

//text box input
import TextBoxInput from './widgets/TextBoxInput';

import Icon from './widgets/Icon';
import IconMorphTransition from './widgets/IconMorphTransition';

export default {
	
	"TextContent":TextRenderer,
	"RichTextContent":RichTextRenderer,
	"HtmlContent": HtmlContent,
	"JsxContent": JsxRenderer,
	"ArticleContent": ArticleContent,
	"ListItemContent": ListItemContent,

	"ImageBox": ImageBox,
	"SmartImageBox": SmartImageBox,
	"ATvImageBox":ATvImageBox,

	"BackgroundBox": BackgroundBox,
	"HtmlBox": HtmlBox,
	"HtmlImageBox": HtmlImageBox,

	"ImageFlexBox":ImageFlexBox,

	"TextBoxInput":TextBoxInput,
	"Icon":Icon,
	"IconMorph":IconMorphTransition,
	//deprecated name
	"IconMorphTransition":IconMorphTransition
};
