
/**
 * HttpAdaptor for making HTTP calls
 */
export default class HttpAdaptor {
	_headers;

	_payload;

	_method;

	_path;

	_baseUrl;

	url;

	requestMeta = {
		method : this._method,
		headers: {},
		body   : ""
	};

	/**
	 * Constructor for the HttpAdaptor cal;.
	 * Takes in the base URL for the current Instance.
	 * @param {string} baseUrl
	 */
	constructor(baseUrl) {
		this._method = "GET";
		this._baseUrl = baseUrl
	}

	/**
	 * Sets base URL fro the call
	 * @param {string} base_url
	 */
	setBaseUrl(baseUrl) {
		this._baseUrl = baseUrl;
		return this;
	}

	/**
	 *
	 * @enum {string} GET | POST | PUT | DELETE | PATCH
	 */
	setMethod(method) {
		this._method = method;
		this.requestMeta.method = method;
		return this;
	}

	/**
	 * Takes in headers and adds up to the default headers
	 * @param {object} headers
	 */
	setHeaders(callHeaders = null) {
		this._headers = callHeaders;

		let tmp = {
			"content-type"       : "application/json",
		};

		if (this._headers) {
			tmp = { ...tmp, ...this._headers };
		}
		if (tmp["content-type"] === null) delete tmp["content-type"];
		this.requestMeta.headers = tmp;

		return this;
	}

	/**
	 * Set payload to the http call
	 * @param {object} payload
	 */
	setPayload(payload = null) {
		this._payload = payload;
		if (this._payload) {
			this.requestMeta.body = JSON.stringify(this._payload);
		} else delete this.requestMeta.body;

		return this;
	}

	/**
	 * Sets endpoint path of the http call
	 * @param {string} path
	 */
	setPath(path) {
		this._path = path;
		this.url = `${this._baseUrl}${this._path}`;
		return this;
	}

	/**
	 * Makes the final HTTP call
	 */
	makeCall() {

		return fetch(this.url, this.requestMeta)
			.then((res) => {
				if (res.status >= 400) {
					return res.json().then((err) => {
						throw err;
					});
				}
				
				return res.json();
			})
			.then((re) => re);
	}
}
