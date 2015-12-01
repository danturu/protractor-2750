import * as Firebase from 'firebase';

describe('Todo App', function() {
  beforeEach(() => {
    browser.get('/');
  });

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('Todo');
  });
});
