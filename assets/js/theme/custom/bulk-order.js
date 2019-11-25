import { hooks, api } from '@bigcommerce/stencil-utils';

export default function bulkOrderForm() {
    debugger;
    api.cart.getCart({}, (err, response) => {
            console.log(response);
            console.log(err);
        });
}
