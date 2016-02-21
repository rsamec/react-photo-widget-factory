import _ from 'lodash';
import React from 'react';
import * as md from 'react-icons/lib/md';

//core text
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

var Widgets = {
	"Core.HtmlContent": HtmlContent,
	"Core.ArticleContent": ArticleContent,
	"Core.ListItemContent": ListItemContent,

	"Core.ImageBox": ImageBox,
	"Core.SmartImageBox": SmartImageBox,
	"Core.ATvImageBox":ATvImageBox,

	"Core.BackgroundBox": BackgroundBox,
	"Core.HtmlBox": HtmlBox,
	"Core.HtmlImageBox": HtmlImageBox,

	"Core.ImageFlexBox":ImageFlexBox,

	"Core.TextBoxInput":TextBoxInput,
	"Core.Icon":Icon,
	"Core.IconMorphTransition":IconMorphTransition
};

_.extend(HtmlContent,{metaData:{
	settings: {
		fields: {
			content: {type: 'htmlEditor'},
			font:{type:'fontEditor'}
		}
	}
}});

_.extend(ArticleContent,{  metaData: {
	settings: {
		fields: {
			content: {type: 'htmlEditor'},
			font:{type:'fontEditor'},
			columnCount:{type:'number'}
		}
	}
}});

_.extend(ListItemContent,{  metaData: {
	settings: {
		fields: {
			content: {type: 'htmlEditor'},
			font:{type:'fontEditor'},
			counterReset:{type:'number'}
		}
	}
}});

_.extend(ImageBox,{metaData: {
	settings: {
		fields: {
			url:{type:'string'},
			border:{type:'borderEditor'},
			objectFit: {
				type: 'select',
				settings: {options: ['cover', 'fill', 'contain']}
			},
			clipPath:{type:'string'}
		}
	}
} });
_.extend(ATvImageBox,{metaData: {
	settings: {
		fields: {
			front:{type:'string'},
			back:{type:'string'},
			border:{type:'borderEditor'},
			objectFit: {
				type: 'select',
				settings: {options: ['cover', 'fill', 'contain']}
			},
			clipPath:{type:'string'}
		}
	}
} });

_.extend(BackgroundBox,{  metaData: {
	settings: {
		fields: {
			background:{type:'bgEditor'},
			border: {type: 'borderEditor'},
			clipPath:{type:'string'}
		}
	}
}});

_.extend(HtmlBox,{  metaData: {
	settings: {
		fields: {
			content:{type:'htmlEditor'},
			font: {type: 'fontEditor'},
			padding: {type: 'boxSizeEditor'},
			border: {type: 'borderEditor'},
			background: {type: 'bgEditor'},
			clipPath:{type:'string'}
		}
	}
}});

_.extend(HtmlImageBox,{metaData:{
	settings: {
		fields: {
			content:{type:'htmlEditor'},
			font: {type: 'fontEditor'},
			padding: {type: 'boxSizeEditor'},
			border: {type: 'borderEditor'},
			background: {type: 'bgEditor'},
			clipPath:{type:'string'},
			imageAlign: {
				type: 'select',
				settings: {options: ['topLeft', 'topRight', 'bottomLeft', 'bottomRight']}
			},
			image: {
				fields: {
					url:{type:'string'},
					margin: {type: 'boxSizeEditor'},
					border: {type: 'borderEditor'},
					width: {type: 'number'},
					height: {type: 'number'}
				}
			}
		}
	}
}});
_.extend(SmartImageBox,{metaData: {
	settings: {
		fields: {
			url:{type:'string'},
			border:{type:'borderEditor'},
			objectFit: {
				type: 'select',
				settings: {options: ['cover', 'fill', 'contain']}
			},
			clipPath:{type:'string'},
			caption:{type:'string'},
			description:{type:'htmlEditor'}
		}
	}
} });

_.extend(TextBoxInput,{metaData: {
	settings: {
		fields: {
			value: {type: 'string'},
			placeholder: {type: 'string'},
			label: {type: 'string'}
		}
	}
}} );

_.extend(ImageFlexBox,{metaData: {
	settings: {
		fields: {
			flexDirection: {
				type: 'select',
				settings: {options: ['row', 'column', 'row-reverse','column-reverse']}
			},
			alignContent: {
				type: 'select',
				settings: {options: ['stretch', 'flex-start', 'flex-end','center','space-between','space-around']}
			},
			images:{type:'plainJsonEditor'},
			image: {
				fields: {
					width:{type:'number'},
					height:{type:'number'},
					border: {type: 'borderEditor'},
					objectFit: {
						type: 'select',
						settings: {options: ['cover', 'fill', 'contain']}
					},
					clipPath: {type: 'string'}
				}
			}
		}
	}
} });

var iconKeys = _.rest(_.keys(md),1);

var sharedFields = {
	fill: {type: 'colorPicker'},
	stroke: {type: 'colorPicker'},
	strokeWidth: {type: 'number'}
}

_.extend(Icon,{  metaData: {
	settings: {
		fields: _.extend({
			width:{type:'number'},
			height:{type:'number'},
			icon: {
				type: 'select',
				settings: {options: iconKeys}
			}
		},sharedFields)
	}
}});

_.extend(IconMorphTransition,{  metaData: {
	settings: {
		fields: _.extend({
			width:{type:'number'},
			height:{type:'number'},

			from: {
				type: 'select',
				settings: {options: iconKeys}
			},
			to: {
				type: 'select',
				settings: {options: iconKeys}
			},	duration:{type:'number'}
		},sharedFields)
	}
}});


export default Widgets; 
