import { asyncWrap } from '../utils';

const routerFn = router => {
  router.route('/users')
    .get()
    .post()
    .put()
    .delete();
  
  return router;
};

export default routerFn;