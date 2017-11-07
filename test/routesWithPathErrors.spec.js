import { expect } from 'chai';
import nopathRoutes, { errors as nopathErrors } from './routes/noPath.json';
import emptypathRoutes, { errors as emptypathErrors } from './routes/emptyPath.json';
import nonStringpathRoutes, { errors as nonStringpathErrors } from './routes/nonStringPath.json';
import missigParamsInpathRoutes, { errors as missigParamsInpathErrors } from './routes/missigParamsInPath.json';

describe('routes with path errors', () => {
  const itBehavesLikepathErrorRoute = (routes, errors, expectedName) => {
    expect(Object.keys(routes).length).to.equal(0);
    expect(errors).to.be.instanceof(Array);
    expect(errors.length).to.equal(1);
    expect(errors[0].route.name).to.equal(expectedName);
  };

  it('path is required', () => {
    itBehavesLikepathErrorRoute(nopathRoutes, nopathErrors, 'nopath');
  });

  it('path cannot be empty', () => {
    itBehavesLikepathErrorRoute(emptypathRoutes, emptypathErrors, 'emptypath');
  });

  it('path has to be a string', () => {
    itBehavesLikepathErrorRoute(nonStringpathRoutes, nonStringpathErrors, 'nonStringpath');
  });

  it('path has include all required params', () => {
    itBehavesLikepathErrorRoute(missigParamsInpathRoutes, missigParamsInpathErrors, 'missingParams');
  });
});
