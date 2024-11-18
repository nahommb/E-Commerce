import { DeliveryStatusChart } from "../../components/charts/area_chart"
import { ProductsSoldChart } from "../../components/charts/bar_chart"
import { NewUsersChart } from "../../components/charts/charts"
import { MostSoldCategoryPieChart } from "../../components/charts/pie_chart"


export const Analytics = ()=>{

    return <div p-8 w-full>
      <div className="flex w-full space-x-10 mb-10 mt-5">
        <div className="w-1/2">
        <p className="mb-5 text-light-purple">New Users</p>
       <NewUsersChart/> 
        </div>
       <div className="w-1/2">
          <p className="mb-5 text-light-purple">Number of Products Sold</p>
       <ProductsSoldChart/>
       </div>
       
      </div>
      <div className="flex w-full space-x-10 ">
        <div className="w-1/2">
        <p className="mb-5 text-light-purple">Most Sold Category</p>
           <MostSoldCategoryPieChart/> 
        </div>
        <div className="w-1/2">
        <p className="mb-5 text-light-purple">Delivery Status</p>
           <DeliveryStatusChart/>
        </div>
      </div>
    
    </div>
}