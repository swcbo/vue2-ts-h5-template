<template>
    <div class="page flex-col">
        <div class="section_5 flex-col">
            <div class="section_8 flex-col"></div>
            <div class="block_6 flex-col">
                <div class="box_25 flex-row justify-between">
                    <div class="text-wrapper_41 flex-col justify-between">
                        <span class="text_63">{{ info.votes }}</span>
                        <span class="text_64">总票数</span>
                    </div>
                    <div class="section_3 flex-col"></div>
                    <div class="text-wrapper_42 flex-col justify-between">
                        <span class="text_65">{{ info.user_number }}</span>
                        <span class="text_66">选手数</span>
                    </div>
                    <div class="section_4 flex-col"></div>
                    <div class="text-wrapper_43 flex-col justify-between">
                        <span class="text_67">{{ info.visits_number }}</span>
                        <span class="text_68">访问量</span>
                    </div>
                </div>
            </div>
            <div class="box_1 flex-col">
                <div class="block_9 flex-col">
                    <div class="list_2 flex-row">
                        <div
                            class="list-items_1 flex-col"
                            v-for="(item, index) in loopData0"
                            :key="index"
                        >
                            <div class="list-items_1 flex-col justify-between">
                                <span class="text_1" v-html="item.lanhutext0"></span>
                                <span class="text_2" v-html="item.lanhutext1"></span>
                            </div>
                        </div>
                    </div>
                    <div class="text-wrapper_44 flex-row justify-between">
                        <span class="text_3">投票规则：</span>
                        <span
                            class="paragraph_1"
                            v-html="
                                `每人每天有三次投票机会，可投一个作品，也可投多个作品，刷票作废。`
                            "
                        ></span>
                    </div>
                    <!-- <div class="text-wrapper_3 flex-col">
                        <span class="text_4">活动已结束</span>
                    </div> -->
                </div>
            </div>
            <div class="box_2 flex-col">
                <div class="box_26 flex-col">
                    <div class="group_11 flex-row justify-between">
                        <div class="section_1 flex-col">
                            <div class="section_6 flex-row justify-between">
                                <div class="box_28 flex-col"></div>
                                <input
                                    class="text-group_1"
                                    placeholder="请输入选手编号或名称"
                                    v-model="search"
                                />
                            </div>
                        </div>
                        <button class="text-wrapper_4 flex-col" @click="onClick_1">
                            <span class="text_5">搜索</span>
                        </button>
                    </div>
                    <div class="group_12 flex-row justify-between">
                        <div
                            class=" flex-col text-wrapper_5"
                            @click="current = 0"
                            :class="current === 0 ? 'choose' : ''"
                        >
                            <span class="text_6">达人组</span>
                        </div>
                        <div
                            class="text-wrapper_6 flex-col"
                            @click="current = 1"
                            :class="current === 1 ? 'choose' : ''"
                        >
                            <span class="text_7">巧手组</span>
                        </div>
                    </div>
                    <div style="display: flex;flex-wrap: wrap;justify-content: space-between;">
                        <div class="flex-column mycontent" v-for="item in content" :key="item.id">
                            <div class="group_13 flex-row justify-between">
                                <div class="block_1 flex-col">
                                    <img
                                        class="image_5"
                                        referrerpolicy="no-referrer"
                                        :src="item.list[0].cover"
                                        @click="onImageClick(item)"
                                    />
                                </div>
                            </div>
                            <div class="text-wrapper_45 flex-row justify-between">
                                <div class="text-group_2">{{ item.title }}</div>
                            </div>
                            <div class="text-wrapper_46">
                                <span class="text_10">{{ item.votes }}</span>
                                <span class="text_11">票</span>
                            </div>
                            <div class="group_14" @click="toAdd(item.id)">
                                <div class="text-wrapper_11">
                                    <span class="text_16">投票</span>
                                </div>
                            </div>
                            <div class="text-wrapper_7 flex-col">
                                <span class="text_8">{{ item.control_no }}号</span>
                            </div>
                        </div>
                        <div
                            v-if="!content.length"
                            style="line-height:200px;text-align: center;width:100%"
                        >
                            暂无数据
                        </div>
                    </div>
                </div>
            </div>
            <span class="text_58">本活动最终解释权归顺义区妇女联合会所有</span>
        </div>
        <div class="box_19 flex-col">
            <div class="text-wrapper_38 flex-col">
                <div class="text-wrapper_60 flex-col justify-between">
                    <span
                        class="paragraph_2"
                        v-html="
                            `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2022年是党的二十大召开之年，也是实施“十四五”规划承上启下的重要一年，为迎接和学习宣传贯彻党的二十大，顺义区妇联以“巾帼心向党&nbsp;喜迎二十大”为主题召开手工艺品大赛`
                        "
                    ></span>
                    <span
                        class="paragraph_3"
                        v-html="
                            ` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;自活动开展以来，各镇街、各单位高度重视，选送的作品主题鲜明，健康向上，截至目前共收到作品xx份，经活动组委会评审，择优选取xx份作品面向社会进行线上投票。`
                        "
                    ></span>
                </div>
            </div>
            <div class="group_5 flex-col">
                <div class="text-wrapper_39 flex-col">
                    <span class="text_59">介绍</span>
                </div>
            </div>
        </div>
        <div class="block_8 flex-col">
            <div class="text-wrapper_40 flex-col">
                <span class="text_69">规则</span>
            </div>
        </div>
    </div>
</template>
<script lang="js">
import {getRotations,vote_statistics,addPiao} from '../api'
import { ImagePreview } from 'vant';
export default {
  data() {
    return {
      current:0,
      content:[],
      all:[],
      search:'',
      info:{
        user_number: 0,
        visits_number: 0,
        votes: 0
      },
      loopData0: [
        { lanhutext0: '投票开始：', lanhutext1: '投票截止：' },
        {
          lanhutext0: '2022-08-31&nbsp;&nbsp;&nbsp;9:00:00',
          lanhutext1: '2022-09-04&nbsp;&nbsp;&nbsp;23:59:59',
        },
      ],
    };
  },
  watch:{
    current(){
        this.search = ''
      this.getData()

    }
  },
   created() {
    this.getData()
    this.getInfo()
  },
  methods: {
   async toAdd(id){
     const {status}= await addPiao(id)
     if(status){
        await Promise.all([ this.getData(),this.getInfo()])
        Toast('感谢参与！')
     }

    },
   async getInfo(){
    const {content} = await  vote_statistics()

      this.info = content
    },
   async getData(){
     const {content}= await  getRotations(this.current === 0?5:6)
     this.all = content;
     this.content = content;
    },
    onImageClick({list}){
      ImagePreview({
        images: list.map(v=>v.file),
        startPosition: 0,
       });
    },
    onClick_1() {
        this.content = [...this.all.filter(v=>v.title.includes(this.search))]
    },
  },
};
</script>

<style lang="scss">
body * {
    box-sizing: border-box;
    flex-shrink: 0;
}
body {
    font-family: PingFangSC-Regular, Roboto, Helvetica Neue, Helvetica, Tahoma, Arial,
        PingFang SC-Light, Microsoft YaHei;
}
input {
    background-color: transparent;
    border: 0;
}
button {
    margin: 0;
    padding: 0;
    border: 1px solid transparent;
    outline: none;
    background-color: transparent;
}

button:active {
    opacity: 0.6;
}
.van-nav-bar__left:active,
.van-nav-bar__right:active {
    opacity: 1;
}
[class*='van-']::after {
    border-bottom: 0;
}
.flex-col {
    display: flex;
    flex-direction: column;
}
.flex-row {
    display: flex;
    flex-direction: row;
}
.justify-start {
    display: flex;
    justify-content: flex-start;
}
.justify-center {
    display: flex;
    justify-content: center;
}

.justify-end {
    display: flex;
    justify-content: flex-end;
}
.justify-evenly {
    display: flex;
    justify-content: space-evenly;
}
.justify-around {
    display: flex;
    justify-content: space-around;
}
.justify-between {
    display: flex;
    justify-content: space-between;
}
.align-start {
    display: flex;
    align-items: flex-start;
}
.align-center {
    display: flex;
    align-items: center;
}
.align-end {
    display: flex;
    align-items: flex-end;
}
.page {
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: rgba(186, 16, 12, 1);
    overflow-x: hidden;
    overflow-y: auto;
    .section_5 {
        width: 100vw;
        .section_8 {
            height: 990px;
            background-color: rgba(186, 16, 12, 1);
            width: 100vw;
            position: relative;
            background: url(https://cdng.huangb.top/20220830%2Fbanner.png) no-repeat;
            background-size: 100% 100%;
        }
        .block_6 {
            height: 200px;
            width: 702px;
            margin: 0 0 0 24px;
            background: linear-gradient(180deg, #f7f2ee 0%, #fcdac6 100%);
            box-shadow: inset 0px 0px 10px 0px rgba(255, 255, 255, 0.5);
            border-radius: 20px;
            .box_25 {
                width: 654px;
                height: 108px;
                margin: 50px 0 0 24px;
                .text-wrapper_41 {
                    width: 200px;
                    height: 97px;
                    margin-top: 4px;
                    .text_63 {
                        width: 200px;
                        height: 48px;
                        display: inline-block;
                        overflow-wrap: break-word;
                        color: rgba(112, 7, 7, 1);
                        font-size: 34px;
                        font-family: PingFangSC-Semibold;
                        white-space: nowrap;
                        line-height: 48px;
                        text-align: center;
                    }
                    .text_64 {
                        width: 200px;
                        height: 40px;
                        display: inline-block;
                        overflow-wrap: break-word;
                        color: rgba(112, 7, 7, 1);
                        font-size: 28px;
                        white-space: nowrap;
                        line-height: 40px;
                        text-align: center;
                        margin-top: 9px;
                    }
                }
                .section_3 {
                    width: 1px;
                    height: 108px;
                    background-color: rgba(216, 216, 216, 1);
                    margin-left: 13px;
                }
                .text-wrapper_42 {
                    width: 200px;
                    height: 97px;
                    margin: 4px 0 0 13px;
                    .text_65 {
                        width: 200px;
                        height: 48px;
                        display: inline-block;
                        overflow-wrap: break-word;
                        color: rgba(112, 7, 7, 1);
                        font-size: 34px;
                        font-family: PingFangSC-Semibold;
                        white-space: nowrap;
                        line-height: 48px;
                        text-align: center;
                    }
                    .text_66 {
                        width: 200px;
                        height: 40px;
                        display: inline-block;
                        overflow-wrap: break-word;
                        color: rgba(112, 7, 7, 1);
                        font-size: 28px;
                        white-space: nowrap;
                        line-height: 40px;
                        text-align: center;
                        margin-top: 9px;
                    }
                }
                .section_4 {
                    width: 1px;
                    height: 108px;
                    background-color: rgba(216, 216, 216, 1);
                    margin-left: 13px;
                }
                .text-wrapper_43 {
                    width: 200px;
                    height: 97px;
                    margin: 4px 0 0 13px;
                    .text_67 {
                        width: 200px;
                        height: 48px;
                        display: inline-block;
                        overflow-wrap: break-word;
                        color: rgba(112, 7, 7, 1);
                        font-size: 34px;
                        font-family: PingFangSC-Semibold;
                        white-space: nowrap;
                        line-height: 48px;
                        text-align: center;
                    }
                    .text_68 {
                        width: 200px;
                        height: 40px;
                        display: inline-block;
                        overflow-wrap: break-word;
                        color: rgba(112, 7, 7, 1);
                        font-size: 28px;
                        white-space: nowrap;
                        line-height: 40px;
                        text-align: center;
                        margin-top: 9px;
                    }
                }
            }
        }
        .box_1 {
            height: 360px;
            background: linear-gradient(180deg, #f7f2ee 0%, #fcdac6 100%);
            box-shadow: inset 0px 0px 10px 0px rgba(255, 255, 255, 0.5);
            border-radius: 20px;
            width: 702px;
            margin: 91px 0 0 24px;
            .block_9 {
                width: 640px;
                height: 354px;
                margin: 99px 0 0 32px;
                .list_2 {
                    width: 489px;
                    height: 112px;

                    .list-items_1 {
                        width: 150px;
                        height: 112px;
                        margin-right: 10px;
                        font-weight: 500;
                        color: #700707;
                        .list-items_1 {
                            width: 150px;
                            height: 112px;
                            margin-right: 10px;

                            .text_1 {
                                width: 329px;
                                height: 42px;
                                display: inline-block;
                                overflow-wrap: break-word;
                                color: rgba(112, 7, 7, 1);
                                font-size: 30px;
                                white-space: nowrap;
                                line-height: 42px;
                                text-align: left;
                            }
                            .text_2 {
                                width: 329px;
                                height: 42px;
                                display: inline-block;
                                overflow-wrap: break-word;
                                color: rgba(112, 7, 7, 1);
                                font-size: 30px;
                                white-space: nowrap;
                                line-height: 42px;
                                text-align: left;
                                margin-top: 28px;
                            }
                        }
                    }
                }
                .text-wrapper_44 {
                    width: 640px;
                    height: 84px;
                    margin-top: 28px;
                    .text_3 {
                        width: 150px;
                        height: 42px;
                        display: inline-block;
                        overflow-wrap: break-word;
                        color: rgba(112, 7, 7, 1);
                        font-size: 30px;
                        white-space: nowrap;
                        line-height: 42px;
                        text-align: left;
                        font-weight: 500;
                        color: #700707;
                    }
                    .paragraph_1 {
                        width: 480px;
                        height: 84px;
                        display: inline-block;
                        overflow-wrap: break-word;
                        color: rgba(112, 7, 7, 1);
                        font-size: 28px;
                        font-family: PingFangSC-Medium;
                        line-height: 42px;
                        text-align: left;
                    }
                }
                .text-wrapper_3 {
                    height: 80px;
                    border-radius: 40px;
                    background-color: rgba(182, 182, 182, 1);
                    margin-top: 50px;
                    width: 638px;
                    .text_4 {
                        width: 150px;
                        height: 44px;
                        display: inline-block;
                        overflow-wrap: break-word;
                        color: rgba(255, 255, 255, 1);
                        font-size: 30px;
                        font-family: PingFangSC-Semibold;
                        white-space: nowrap;
                        line-height: 44px;
                        text-align: left;
                        margin: 18px 0 0 244px;
                    }
                }
            }
        }
        .mycontent {
            width: 310px;
            position: relative;
        }
        .box_2 {
            background: linear-gradient(180deg, #f7f2ee 0%, #fcdac6 100%);
            box-shadow: inset 0px 0px 10px 0px rgba(255, 255, 255, 0.5);
            border-radius: 20px;
            width: 702px;
            position: relative;
            margin: 32px 0 0 24px;
            padding-bottom: 68px;
            .box_26 {
                width: 660px;
                margin: 41px 0 0 21px;
                .group_11 {
                    width: 660px;
                    height: 80px;
                    .section_1 {
                        height: 80px;
                        border-radius: 40px;
                        border: 1px solid rgba(186, 16, 12, 1);
                        width: 490px;
                        .section_6 {
                            width: 351px;
                            height: 42px;
                            margin: 19px 0 0 27px;
                            .box_28 {
                                width: 40px;
                                height: 40px;
                                background: url(https://cdng.huangb.top/20220830%2Ficon_saerch.png);
                                background-size: 100% 100%;
                            }
                            .text-group_1 {
                                width: 100%;
                                height: 42px;
                                color: #333;
                                font-size: 30px;
                                line-height: 42px;
                                margin-left: 10px;
                            }
                        }
                    }
                    .text-wrapper_4 {
                        height: 80px;
                        border-radius: 40px;
                        background-color: rgba(236, 61, 28, 1);
                        width: 150px;
                        .text_5 {
                            width: 60px;
                            height: 42px;
                            display: inline-block;
                            overflow-wrap: break-word;
                            color: rgba(255, 255, 255, 1);
                            font-size: 30px;
                            white-space: nowrap;
                            line-height: 42px;
                            text-align: center;
                            margin: 19px 0 0 45px;
                        }
                    }
                }
                .group_12 {
                    width: 660px;
                    height: 80px;
                    margin-top: 48px;
                    .text-wrapper_5 {
                        height: 80px;
                        width: 330px;
                        background-color: rgba(251, 193, 159, 1);
                        color: rgba(112, 7, 7, 1);
                        border-radius: 8px 0px 0px 8px;
                        .text_6 {
                            width: 96px;
                            height: 44px;
                            display: inline-block;
                            overflow-wrap: break-word;
                            font-size: 32px;
                            font-family: PingFangSC-Semibold;
                            white-space: nowrap;
                            line-height: 44px;
                            text-align: center;
                            margin: 18px 0 0 117px;
                        }
                    }
                    .text-wrapper_6 {
                        height: 80px;
                        border-radius: 0 8px 8px 0;
                        background-color: rgba(251, 193, 159, 1);
                        color: rgba(112, 7, 7, 1);
                        width: 330px;
                        .text_7 {
                            width: 96px;
                            height: 44px;
                            display: inline-block;
                            overflow-wrap: break-word;

                            font-size: 32px;
                            font-family: PingFangSC-Semibold;
                            white-space: nowrap;
                            line-height: 44px;
                            text-align: center;
                            margin: 18px 0 0 117px;
                        }
                    }
                    .choose {
                        background: linear-gradient(180deg, #f66c1b 0%, #e8281d 100%);
                        color: rgba(255, 255, 255, 1);
                    }
                }
                .group_13 {
                    width: auto;
                    height: 240px;
                    margin-top: 56px;
                    .block_1 {
                        position: relative;
                        width: 310px;
                        height: 240px;
                        border-radius: 16px;
                        overflow: hidden;
                        .image_5 {
                            position: absolute;
                            object-fit: cover;
                            left: 0;
                            top: 0;
                            width: 310px;
                            height: 240px;
                        }
                    }
                    .block_2 {
                        position: relative;
                        width: 310px;
                        height: 240px;
                        border-radius: 16px;
                        overflow: hidden;
                        background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngad89edb301175207ee09b8acfa29758e62abcc03b43ed631ae9fc665a68f8d5e)
                            100% no-repeat;
                        .image_6 {
                            position: absolute;
                            left: 0;
                            top: 0;
                            width: 310px;
                            height: 240px;
                        }
                    }
                }
                .text-wrapper_45 {
                    width: 100%;
                    text-align: center;
                    margin: 21px 0 0 0;
                    .text-group_2 {
                        width: 100%;
                        height: 90px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: rgba(0, 0, 0, 1);
                        font-size: 32px;
                        text-align: center;
                    }
                    .text-group_3 {
                        width: 64px;
                        height: 45px;
                        display: inline-block;
                        overflow-wrap: break-word;
                        color: rgba(0, 0, 0, 1);
                        font-size: 32px;
                        font-family: PingFangSC-Semibold;
                        white-space: nowrap;
                        line-height: 45px;
                        text-align: center;
                    }
                }
                .text-wrapper_46 {
                    width: 100%;
                    margin: 8px 0 0 0;
                    text-align: center;
                    .text_10 {
                        height: 45px;
                        display: inline-block;
                        overflow-wrap: break-word;
                        color: rgba(240, 19, 19, 1);
                        font-size: 32px;
                        font-family: PingFangSC-Medium;
                        white-space: nowrap;
                        line-height: 45px;
                        text-align: center;
                    }
                    .text_11 {
                        width: 32px;
                        height: 45px;
                        display: inline-block;
                        overflow-wrap: break-word;
                        color: rgba(102, 102, 102, 1);
                        font-size: 32px;
                        white-space: nowrap;
                        line-height: 45px;
                        text-align: center;
                        margin-left: 5px;
                    }
                    .text_12 {
                        width: 78px;
                        height: 45px;
                        display: inline-block;
                        overflow-wrap: break-word;
                        color: rgba(240, 19, 19, 1);
                        font-size: 32px;
                        font-family: PingFangSC-Medium;
                        white-space: nowrap;
                        line-height: 45px;
                        text-align: center;
                        margin-left: 252px;
                    }
                    .text_13 {
                        width: 32px;
                        height: 45px;
                        display: inline-block;
                        overflow-wrap: break-word;
                        color: rgba(102, 102, 102, 1);
                        font-size: 32px;
                        white-space: nowrap;
                        line-height: 45px;
                        text-align: center;
                        margin-left: 4px;
                    }
                }
                .group_14 {
                    width: 100%;
                    height: 56px;
                    margin: 20px 0 0 0;
                    text-align: center;
                    .text-wrapper_11 {
                        height: 56px;
                        background: linear-gradient(180deg, #f66c1b 0%, #e8281d 100%);
                        border-radius: 44px;
                        width: 200px;
                        text-align: center;
                        margin: auto;
                        .text_16 {
                            width: 56px;
                            height: 40px;
                            display: inline-block;
                            overflow-wrap: break-word;
                            color: rgba(255, 255, 255, 1);
                            font-size: 28px;
                            white-space: nowrap;
                            line-height: 40px;
                            text-align: center;
                            margin: 8px 0 0 0;
                        }
                    }
                }
            }
            .text-wrapper_7 {
                height: 41px;
                border-radius: 16px 0 16px 0;
                background-color: rgba(217, 148, 108, 1);
                width: 91px;
                position: absolute;
                left: 0;
                top: 56px;
                .text_8 {
                    width: 34px;
                    height: 33px;
                    display: inline-block;
                    overflow-wrap: break-word;
                    color: rgba(255, 255, 255, 1);
                    font-size: 24px;
                    white-space: nowrap;
                    line-height: 33px;
                    text-align: center;
                    margin: 4px 0 0 29px;
                }
            }
        }
        .text_58 {
            width: 100vw;
            height: 33px;
            color: rgba(255, 192, 192, 1);
            font-size: 24px;
            line-height: 33px;
            text-align: center;
            margin: 50px 0 100px 0;
        }
    }
    .box_19 {
        height: 616px;
        width: 100vw;
        position: absolute;
        left: 0;
        top: 374px;
        .text-wrapper_38 {
            height: 470px;
            background: linear-gradient(180deg, #f7f2ee 0%, #fcdac6 100%);
            box-shadow: inset 0px 0px 10px 0px rgba(255, 255, 255, 0.5);
            border-radius: 20px;
            width: 702px;
            margin: 107px 0 0 24px;
            .text-wrapper_60 {
                width: 660px;
                height: 361px;
                margin: 69px 0 0 36px;
                .paragraph_2 {
                    width: 633px;
                    height: 168px;
                    display: inline-block;
                    overflow-wrap: break-word;
                    color: rgba(112, 7, 7, 1);
                    font-size: 30px;
                    line-height: 42px;
                    text-align: justify;
                }
                .paragraph_3 {
                    width: 633px;
                    height: 168px;
                    display: inline-block;
                    overflow-wrap: break-word;
                    color: rgba(112, 7, 7, 1);
                    font-size: 30px;
                    line-height: 42px;
                    text-align: justify;
                    margin-top: 25px;
                }
            }
        }
        .group_5 {
            position: absolute;
            left: 225px;
            top: 66px;
            width: 308px;
            height: 88px;
            background: linear-gradient(180deg, #f66c1b 0%, #e8281d 100%);
            box-shadow: 0px 2px 8px 0px rgba(224, 137, 89, 0.5);
            border-radius: 44px;
            border: 4px solid #ffd8b6;
            overflow: hidden;
            .text-wrapper_39 {
                height: 80px;
                width: 300px;
                position: absolute;
                left: 0;
                top: 0;
                .text_59 {
                    width: 80px;
                    height: 56px;
                    display: inline-block;
                    overflow-wrap: break-word;
                    color: rgba(255, 240, 231, 1);
                    font-size: 40px;
                    font-family: PingFangSC-Semibold;
                    white-space: nowrap;
                    line-height: 56px;
                    text-align: center;
                    margin: 10px 0 0 110px;
                }
            }
        }
    }
    .block_8 {
        position: absolute;
        left: 225px;
        top: 1240px;
        width: 308px;
        height: 88px;
        overflow: hidden;
        background: linear-gradient(180deg, #f66c1b 0%, #e8281d 100%);
        box-shadow: 0px 2px 8px 0px rgba(224, 137, 89, 0.5);
        border-radius: 44px;
        border: 4px solid #ffd8b6;
        .text-wrapper_40 {
            height: 80px;
            width: 300px;
            position: absolute;
            left: 0;
            top: 0;
            .text_69 {
                width: 80px;
                height: 56px;
                display: inline-block;
                overflow-wrap: break-word;
                color: rgba(255, 240, 231, 1);
                font-size: 40px;
                font-family: PingFangSC-Semibold;
                white-space: nowrap;
                line-height: 56px;
                text-align: center;
                margin: 10px 0 0 110px;
            }
        }
    }
}
</style>
