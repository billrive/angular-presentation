billRive.controller('billController', function($scope, billService) {
  billService.getBills(function(data) {
     $scope.bills = data;
     $scope.username ="Prashanth";
     $scope.payers= [
{name:'John Doe'},
{name:'Kristen Stewart'},
{name:'Trevor Pott'},
{name:'Hilda Hess'},
{name:'Gavin Mays'}
];


$scope.friends= [
{name:'John Doe'},
{name:'Kristen Stewart'},
{name:'Trevor Pott'},
{name:'Hilda Hess'},
{name:'Gavin Mays'}
];


$scope.groups= [
{name:'SLC Roommates'},
{name:'Denver Old Buddies'},
{name:'Ski Club'},
{name:'Family'},
{name:'India'}
];

     function addBill(){
         
//         $scope.bills.put();
     };
     
      function deleteBill(){
         
         
     };
     
      function editBill(){
         
         
     };
  });
});