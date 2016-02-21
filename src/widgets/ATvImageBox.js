import React from 'react';
import styleBorder from './utils/border';
import AtvImg from 'react-atv-img';

let ImageBox = (props) => {
	var style = {};

	//size
	if (!!props.height) style.height = props.height;
	if (!!props.width) style.width = props.width;
	if (!!props.minWidth) style.minWidth = props.minWidth;
	if (!!props.minHeight) style.minHeight = props.minHeight;

	//border
	styleBorder(style, props.border);
	
	if (props.objectFit) style.objectFit = props.objectFit || 'fill';
	if (props.clipPath) {
		style.clipPath = props.clipPath;
		style.WebkitClipPath = props.clipPath;
	}
	if (!!props.flexGrow) style.flexGrow = props.flexGrow;
	var layers = [];
	if (props.back) layers.push(props.back);
	if (props.front) layers.push(props.front);
	return <AtvImg
		layers={layers}
		staticFallback="http://kloc.pm/images/kloc-icon-flattened.jpg"
		isStatic={false}
		style={style}
	/>
	//return <img src={props.url} style={style}/>
}
const DEFAULT_IMAGE_URL = "data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==";
ImageBox.defaultProps = {url:DEFAULT_IMAGE_URL,minWidth:100,minHeight:100};
export default ImageBox;
