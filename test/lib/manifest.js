// NB: mockup makes all modules act like ES6 i.e. default object or named imports
// https://github.com/deepsweet/mocku/issues/4
describe('lib/manifest', () => {
  let stubs;
  let fs;
  
  let manifestMod;
  const modulePath = '../../lib/manifest';
  
  beforeEach((done) => {
    fs = {
      readFileSync: expectation.create('readFileSync'),
      existsSync: expectation.create('existsSync')
    }
    
    stubs = {
      'fs': fs
    }

    mock(modulePath, stubs)
    
    import(modulePath)
      .then((mod) => {
        manifestMod = mod.default;
        return done();
      })

  })

  afterEach(() => {
    fs.existsSync.verify();
    fs.readFileSync.verify();
    unmock(modulePath);
  })

  describe('check', () => {
    
    it('should include the entries', () => {
      const manifest = {
        "index.js": "index.f7b8c791adaefb2fb42f.js",
        "index.js.map": "index.f7b8c791adaefb2fb42f.js.map"
      };
  
      const fakeManifestPath = 'testmanifestpath';
      fs.existsSync.once().withArgs(fakeManifestPath).returns(true);
      fs.readFileSync.once().withArgs(fakeManifestPath, 'utf-8').returns(JSON.stringify(manifest));
      
      const result = manifestMod(fakeManifestPath);
      
      expect(result).to.be.instanceOf(Object);
      expect(result).to.have.property('index.js')
    })
  
  })

})