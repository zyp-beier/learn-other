<template>
    <div style="margin:10px;height: 100%">
        <el-card>
            <el-row>
                <el-col :md="12" :sm="12">
                    <video-js></video-js>
                    <div class="timeline">
                        <el-timeline >
                            <el-timeline-item
                                v-for="(item,index) in activities"
                                :key="index"
                                :timestamp="item.timestamp"
                            >
                                {{item.content}}
                            </el-timeline-item>
                        </el-timeline>
                    </div>
                </el-col>
                <el-col  :md="12" :sm="12">
                    <div>
                        <div>
                            <el-button type="primary" icon="el-icon-edit" >插入内容</el-button>
                        </div>
                        <div class="period">
                            <span style="color: #ccc">
                                开始时间：10：25
                            </span>
                            <div>
                                结束时间：10：25
                            </div>
                            <el-button type="primary" >本段结束</el-button>
                        </div>
                    </div>
                    <div class="extraInfo">
<!--                        <div>附加信息</div>-->
                        <el-divider content-position="left">附加信息</el-divider>
                        <el-form ref="form" :model="form"  style="margin-top: 10px">
                            <el-form-item label="段落名称:">
                                <el-input v-model="form.name" style="width: 50%"></el-input>
                            </el-form-item>
                            <el-form-item label="描述信息:">
                                <el-input v-model="form.info" style="width: 50%"></el-input>
                            </el-form-item>
                        </el-form>
                    </div>
                    <div class="extraInfo">
<!--                        <div>插入内容</div>-->
                        <el-divider content-position="left">插入内容</el-divider>
                        <div style="margin-top: 10px"></div>
                    </div>
                </el-col>
            </el-row>
        </el-card>
    </div>
</template>

<script>
    import VideoJs from "../components/VideoJs";
    export default {
        name: "CreateCourse",
        components: {VideoJs},
        data() {
            return {
                reverse: true,
                activities: [{
                    content: '活动按期开始',
                    timestamp: '2018-04-15'
                }, {
                    content: '通过审核',
                    timestamp: '2018-04-13'
                }, {
                    content: '创建成功',
                    timestamp: '2018-04-11'
                }],
                form:{}
            }
        }
    }
</script>

<style scoped>
    .timeline{
        margin: 30px 0;
    }
    .period{
        margin-top: 20px;
        width: 50%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .extraInfo{
        margin-top: 20px;
    }
</style>
