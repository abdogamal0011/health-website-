import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppintmentService {
  myToken:any = {
    token: localStorage.getItem('etoken')
  }
  constructor(private httpAppiotment:HttpClient) { }


  addtoCart(idproduct:string){
    return this.httpAppiotment.post('https://ecommerce.routemisr.com/api/v1/cart',
    {
      productId:idproduct
    },
    {
      headers:this.myToken
    }
    );

  }
  showCart(){
    return this.httpAppiotment.get('https://ecommerce.routemisr.com/api/v1/cart',
  {
    headers:this.myToken
  }
  );
  }

  removeAppintemt(id:string){
    return this.httpAppiotment.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
    {
      headers:this.myToken
    }
    )
  }
  UpdataAppintemt(id:string , count:number){
    return this.httpAppiotment.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
    {
      count:count
    },
    {
      headers:this.myToken
    }
    )
  }
  removeAllAppintemt(){
    return this.httpAppiotment.delete(`https://ecommerce.routemisr.com/api/v1/cart`,
    {
      headers:this.myToken
    }
    )

    
  }




}
