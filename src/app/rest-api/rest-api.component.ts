import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
@Component({
  selector: 'app-rest-api',
  templateUrl: './rest-api.component.html',
  styleUrls: ['./rest-api.component.css']
})
export class RestApiComponent implements OnInit {

  constructor(private http: HttpClient) { }
  callJsonGetRestApiResponse: string | undefined;
  postResult: string | undefined;
  Url: string = 'https://localhost:44331/api/HumanRiskApi';
  ngOnInit() {
  }

  onClick(type:string="GetData"){
    if(type == "GetData"){
        this.callJsonGetRestApi(this.Url).subscribe(data=>{
          this.callJsonGetRestApiResponse=JSON.stringify(data);
        console.log("called from callJsonGetRestApi",data)
    });
    }
    else if(type=="postToDb"){
      this.callJsonPost(this.Url,"Testing","I am testing like crazy").subscribe(data=>{
        this.postResult=JSON.stringify(data);
        console.log("called from callJsonDataRestApi",data)
      });
    }
  }



// calling get rest api   
  callJsonGetRestApi(url: string):Observable<any> {
   
    
    return this.http.get(url)
      .pipe(map((data: any) => {
      //handle api 200 response code here or you wanted to manipulate to response
        return data;

      }),
        catchError((error) => {    // handle error
         
          if (error.status == 404) {
            //Handle Response code here
          }
          return throwError(error);
        })
      );
    }
  
  callJsonPost(url: string, title: string, desc: string){
    const params = new HttpParams()
          .append('Title', title)
          .append('Description', desc);

    const headers = new HttpHeaders()
          .append(
            'Content-Type',
            'application/json'
          );

    const PostJsonTest: any = 
      {
        id: 1,
        title: "testing",
        description: "This is a long description"
      }
    
    return this.http.post(url,PostJsonTest,{
      headers: headers,
    })
      .pipe(map((data: any) => {
      //handle api 200 response code here or you wanted to manipulate to response
        return data;

      })
      ,
       catchError((error) => {    // handle error
         
          if (error.status == 404) {
            //Handle Response code here
          }
          return throwError(error);
        })
      );
  }

}

