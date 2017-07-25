//testTruthTable

var assert = require("assert"),
  TruthTable = require("../lib/package/TruthTable.js"),
  test = function(exp, assertion) {
    it(exp + " should match " + assertion + ".", function() {
      var tt = new TruthTable(exp);

      assert.equal(
        tt.getEvaluation(),
        assertion,
        JSON.stringify({
          truthTable: tt,
          evaluation: tt.evaluation
        })
      );
    });
  };

test("", "valid");
test("false", "absurdity");
test("true", "valid");
test("true OR false", "valid");
test("b=1", "valid");
test("b!=1", "valid");
test("b=c", "valid");
test("b=2", "valid");
test("b!=c", "valid");
test("b!=b", "absurdity");
test("true and b!=c", "valid");
test("b=1 and b!=1", "absurdity");
test("(b=1)", "valid");
test("((b=1))", "valid");
test("(b=1) and (b!=1)", "absurdity");
test("(b=2)", "valid");
test("(b=0)", "valid");
test("(b)", "valid");
test("b", "valid");
test("!b", "valid");
test("!(b)", "valid");
test("(!b)", "valid");
test("b=c and d=e", "valid");
test("(b=c) and (d=e)", "valid");
test("true AND false", "absurdity");
test("(a = b OR c=d) AND a!=b AND c!=d", "absurdity");
test("b and b", "valid");
test("(b and b)", "valid");
test("((b and b))", "valid");
test("((b) and (b))", "valid");
test("(b and !b)", "absurdity");
test("((b and !b))", "absurdity");
test("((b) and (!b))", "absurdity");
test("((b) and !(b))", "absurdity");
test("b and !b", "absurdity");
test('request.verb="POST" and request.verb!="POST"', "absurdity");
test('(req.pin.value ~~ "[0-9][0-9][0-9][0-9]")', "valid");
test(
  'req.pin.value="" or req.pin.value=null or not (req.pin.value ~~ "[0-9][0-9][0-9][0-9]")',
  "valid"
);
test(
  'purchase_purchase_0__statusLog_0__status!="Authorized" and purchase.paymentmethod.type != "paypal"',
  "valid"
);
test("(b=1) and (b!=1)", "absurdity");
test('request.verb = "GET" and request.verb = "POST" and response.status.code=200', "absurdity");

test('request.verb = "GET" and request.verb != "POST"', "valid");
test('"GET" =request.verb and request.verb = "POST"', "absurdity");
test("(a = b) and (b=c) and (a!=c)", "absurdity");
test("walletAdjustment.action != \"grant\" AND walletAdjustment.action != \"revoke\"", "valid");
