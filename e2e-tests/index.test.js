module.exports = {
  'Index test' : function (browser) {
    browser
      .url('http://localhost:8080/index.html')
      .waitForElementVisible('body', 1000)
      .click('.fox')
      .pause(5000)
      .click('.jab1')
      .assert.attributeContains('.gifattack', 'src', 'https://zippy.gfycat.com/YearlyEdibleHarpseal.mp4')
      .getText(".totalframes", function(result){
        this.assert.equal(result.value, 'Total Frames: 17\nActive Frames: 2-3')
      })
      .end();
  },
  'Index test2' : function (browser) {
    browser
      .url('http://localhost:8080/index.html')
      .waitForElementVisible('body', 1000)
      .click('.falco')
      .pause(5000)
      .click('.jab1')
      .assert.attributeContains('.gifattack', 'src', 'https://zippy.gfycat.com/WastefulEducatedKilldeer.mp4')
      .getText(".totalframes", function(result){
        this.assert.equal(result.value, 'Total Frames: 0\nActive Frames: 0-0')
      })
      .end();
  },
  'Index test3' : function (browser) {
    browser
      .url('http://localhost:8080/index.html')
      .waitForElementVisible('body', 1000)
      .click('.falco')
      .pause(5000)
      .click('.fox')
      .pause(4000)
      .click('.jab1')
      .assert.containsText('.totalframes', 'Total Frames: 17\nActive Frames: 2-3')
      .assert.attributeContains('.gifattack', 'src', 'https://zippy.gfycat.com/YearlyEdibleHarpseal.mp4')
      .assert.elementPresent('p')

      .end();
  },
};
