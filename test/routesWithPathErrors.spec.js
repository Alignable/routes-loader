import { expect } from 'chai';
import nopathRoutes, { errors as nopathErrors } from './routes/noPath.json';
import emptypathRoutes, { errors as emptypathErrors } from './routes/emptyPath.json';
import nonStringpathRoutes, { errors as nonStringpathErrors } from './routes/nonStringPath.json';
import missigRequiredParamsInpathRoutes, { errors as missigRequiredParamsInpathErrors } from './routes/missigRequiredParamsInPath.json';
import missigOptionalParamsInpathRoutes, { errors as missigOptionalParamsInpathErrors } from './routes/missigOptionalParamsInPath.json';

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
    itBehavesLikepathErrorRoute(missigRequiredParamsInpathRoutes, missigRequiredParamsInpathErrors, 'missingParams');
  });

  it('path has include all optional params', () => {
    itBehavesLikepathErrorRoute(missigOptionalParamsInpathRoutes, missigOptionalParamsInpathErrors, 'missingParams');
  });
});