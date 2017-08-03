<!-- <template>

              <el-button type="warning" @click="delGroup" :disabled="this.sels.length === 0">批量删除</el-button><!--disabled值动态显示，默认为true,当选中复选框后值为false-->  
          <el-table :data="tableList" :fit="true" @row-click="handleCurrentChange" @selection-change="selsChange" ref="table">  
              <el-table-column type="selection" width="55" reserve-selection=""></el-table-column>  
              <el-table-column prop="id" label="ID" width="150" class-name="bg_blue"></el-table-column>  
              <el-table-column prop="cpsProductId" label="商品ID" width="200"></el-table-column>  
              <el-table-column prop="productName" label="商品名称" width="200" show-overflow-tooltip></el-table-column>  
              <el-table-column label="图片" width="200">  
                  <template scope="data1">  
                      <img :src="data1.row.imgsrc" class="mt10 mb10">  
                  </template>  
              </el-table-column>  
              <el-table-column label="操作" align="center">  
                  <template scope="scope">  
                      <el-button type="primary" size="small" @click="onEditSku(scope.row.id)">编辑</el-button>  
                      <el-button size="small" @click="onDelProduct(scope.row.id)">删除</el-button>  
                  </template>  
              </el-table-column>  
          </el-table>  
</template>

<script type="ecmascript-6">
export default {  
    name: 'product',  
    mounted() {  
        this.onSearch()  
    },  
    data() {  
        return {  
            sels: [],//选中的值显示   
            tableList: [],  
            total: 0,  
            start: 0,  
            size: 10  
        }  
    },  
    methods: {  
        selsChange(sels) {  
            this.sels = sels  
        },  
        delGroup() {  
            var ids = this.sels.map(item => item.id).join()//获取所有选中行的id组成的字符串，以逗号分隔  
        },  
        handleCurrentChange(row, event, column) {  
            this.$refs.table.toggleRowSelection(row)  
        }  
    }  
}  
</script>   -->