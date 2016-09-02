/* global angular, iida */

describe('基本動作テスト', function() {

  // angularの$filter
  var $filter;

  // $httpBackendモック
  var $httpBackend;

  // ルートスコープ
  var $rootScope;

  // コントローラを作成するための$controller
  var $controller;

  // 自分で定義したサービス、コントローラ
  var dataService;
  var settingParamService;
  var userResource;
  var restController;

  var userList = {users: [{name: 'aaa'}, {name: 'bbb'}]};


  beforeEach(function(){
    // モジュールを有効化
    module(iida.moduleName);
  });

  // 初期化処理
  beforeEach(inject(function($injector) {

    // filterフィルターをインスタンス化
    $filter = $injector.get('$filter');

    // HTTPサービスのモックをインスタンス化
    $httpBackend = $injector.get('$httpBackend');

    // 応答の設定
    $httpBackend.when('GET', 'http://server:80/rest/users').respond(userList);
    $httpBackend.when('GET', 'http://server:80/rest/users/').respond(userList);

    // ルートスコープ
    $rootScope = $injector.get('$rootScope');
    $controller = $injector.get('$controller');

    // テスト対象のコントローラを初期化する
    // スコープオブジェクトをインスタンス化
    var scope = $rootScope.$new();

    dataService = $injector.get('dataService');
    settingParamService = $injector.get('settingParamService');
    userResource = $injector.get('userResource');

    var arg = {
      '$scope': scope,
      'dataService': dataService,
      'settingParamService': settingParamService,
      'userResource': userResource
    };

    // コントローラのインスタンス化
    restController = $controller('restController', arg);

  }));


  // 1 + 1 = 2 の確認
  it('テストランナー動作チェック', function() {
    expect(1 + 1).toEqual(2);
  });

  // angularの$filterの動作を確認
  it('フィルタテスト', function(){

    var arr = ['iida', 'takamitsu'];

    var filter = $filter('filter');

    var searchString = 'iid';

    var filtered = filter(arr, searchString);

    expect(filtered).toEqual(['iida']);

  });


  it('コントローラのテスト', function(){

    restController.query();

    console.log(' before flush ' + restController.users);

    $httpBackend.flush();

    console.log(' after flush ' + restController.users);

  });


  afterEach(function(){
    // $httpBackend.verifyNoOutstandingExpectation();
    // $httpBackend.verifyNoOutstandingRequest();
  });

});
