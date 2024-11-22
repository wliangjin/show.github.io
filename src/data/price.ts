let aid = 1001
export const price = {
	personal: {
		title: '个人版',
		common: '专注设计，提升设计效率',
		version: [
			{
				id: 10,
				title: '免费版',
				common: '免费',
				btnText: '立即使用',
				advantage: [
					{
						aid: aid++,
						title: '专业云设计工具'
					},
					{
						aid: aid++,
						title: '标清渲染'
					}
				]
			},
			{
				id: 11,
				title: '基础会员',
				common: '¥399首单优惠/年',
				btnText: '立即升级',
				advantage: [
					{
						aid: aid++,
						title: '每月300+渲染券（最高5K）'
					},
					{
						aid: aid++,
						title: '3K/4K夜间无限渲染（22:00-8:00）'
					},
					{
						aid: aid++,
						title: '最高720P视频渲染'
					},
					{
						aid: aid++,
						title: '全景图去水印+自定义音乐上传'
					}
				]
			},
			{
				id: 12,
				title: '高级会员',
				common: '¥999/年',
				btnText: '立即升级',
				advantage: [
					{
						aid: aid++,
						title: '4K/5K半日无限渲染（20:00-8:00）'
					},
					{
						aid: aid++,
						title: '20000+设计精品库素材'
					},
					{
						aid: aid++,
						title: '定制图纸清单一键导出'
					},
					{
						aid: aid++,
						title: '施工图升级卡全部特权'
					}
				]
			},
			{
				id: 12,
				title: '专业会员',
				common: '¥3,000/年',
				btnText: '立即升级',
				advantage: [
					{
						aid: aid++,
						title: '4K/5K全天无限渲染'
					},
					{
						aid: aid++,
						title: '最高32K渲染（可增购）'
					},
					{
						aid: aid++,
						title: '同时渲染3张，享优先渲染'
					},
					{
						aid: aid++,
						title: '最高1080P视频渲染'
					},
					{
						aid: aid++,
						title: '全景图个人联系方式+logo设置'
					}
				]
			}
		]
	},
	enterprise: {
		title: '企业版',
		common: '全链路协作各行业覆盖，打造专业解决方案',
		version: [
			{
				id: 10,
				title: '团队版（龙年腾飞版）',
				common: '适用以设计渲染为主要需求的小微企业',
				advantage: [
					{
						aid: aid++,
						title: '全行业设计能力'
					},
					{
						aid: aid++,
						title: '最高可同时渲染6张；最高渲染清晰度可达32K'
					},
					{
						aid: aid++,
						title: '全量酷家乐精品设计素材'
					},
					{
						aid: aid++,
						title: '全景图营销留资能力'
					},
					{
						aid: aid++,
						title: '可自定义施工图模版'
					}
				]
			},
			{
				id: 11,
				title: '企业设计营销版（2024）',
				common: '适用大家居、公装、别墅建筑、专业照明、门窗等行业（包括跨行业业务）的企业',
				advantage: [
					{
						aid: aid++,
						title: '全行业设计能力'
					},
					{
						aid: aid++,
						title: '海量高清视频权益'
					},
					{
						aid: aid++,
						title: '无限量自建3D/参数化模型库'
					},
					{
						aid: aid++,
						title: '无限量自定义企业模版'
					},
					{
						aid: aid++,
						title: '多品牌营销管理，多渠道素材管理'
					},
					{
						aid: aid++,
						title: '设计数据API对接'
					}
				]
			},
			{
				id: 12,
				title: '企业生产对接版（2024）',
				common: '适用设计-生产一体化需求企业，柔性生产企业',
				advantage: [
					{
						aid: aid++,
						title: '可打通设计与生产对接，拥有全量酷家乐精品素材'
					},
					{
						aid: aid++,
						title: '无限量自定义企业模版'
					},
					{
						aid: aid++,
						title: '多品牌营销管理，多渠道素材管理'
					},
					{
						aid: aid++,
						title: '设计数据+生产数据API对接'
					},
					{
						aid: aid++,
						title: '可增购酷家乐定制行业生产对接全线版'
					},
					{
						aid: aid++,
						title: '专属实施工程师1V1答疑服务'
					}
				]
			}
		],
	}
}
const pricee = [
	{
		id: 10,
		title: '团队版（龙年腾飞版）',
		common: '适用以设计渲染为主要需求的小微企业',
		advantage: [
			{
				aid: aid++,
				title: '全行业设计能力'
			},
			{
				aid: aid++,
				title: '最高可同时渲染6张；最高渲染清晰度可达32K'
			},
			{
				aid: aid++,
				title: '全量酷家乐精品设计素材'
			},
			{
				aid: aid++,
				title: '全景图营销留资能力'
			},
			{
				aid: aid++,
				title: '可自定义施工图模版'
			}
		]
	},
	{
		id: 11,
		title: '企业设计营销版（2024）',
		common: '适用大家居、公装、别墅建筑、专业照明、门窗等行业（包括跨行业业务）的企业',
		advantage: [
			{
				aid: aid++,
				title: '全行业设计能力'
			},
			{
				aid: aid++,
				title: '海量高清视频权益'
			},
			{
				aid: aid++,
				title: '无限量自建3D/参数化模型库'
			},
			{
				aid: aid++,
				title: '无限量自定义企业模版'
			},
			{
				aid: aid++,
				title: '多品牌营销管理，多渠道素材管理'
			},
			{
				aid: aid++,
				title: '设计数据API对接'
			}
		]
	},
	{
		id: 12,
		title: '企业生产对接版（2024）',
		common: '适用设计-生产一体化需求企业，柔性生产企业',
		advantage: [
			{
				aid: aid++,
				title: '可打通设计与生产对接，拥有全量酷家乐精品素材'
			},
			{
				aid: aid++,
				title: '无限量自定义企业模版'
			},
			{
				aid: aid++,
				title: '多品牌营销管理，多渠道素材管理'
			},
			{
				aid: aid++,
				title: '设计数据+生产数据API对接'
			},
			{
				aid: aid++,
				title: '可增购酷家乐定制行业生产对接全线版'
			},
			{
				aid: aid++,
				title: '专属实施工程师1V1答疑服务'
			}
		]
	}
]