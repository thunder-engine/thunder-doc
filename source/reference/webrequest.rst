.. _api_WebRequest:

WebRequest
==========

Inherited: None

.. _api_WebRequest_description:

Description
-----------

The WebRequest class provides a mechanism to send HTTP requests (e.g., GET requests) and handle the server's response. It manages the connection, sends headers, and processes the response, including handling HTTP status codes, headers, and content. This class supports both regular HTTP and HTTPS protocols.



.. _api_WebRequest_public:

Public Methods
--------------

+------------------------------+----------------------------------------------------------------------------------------+
|                const uint8_t | :ref:`data<api_WebRequest_7e51490c>` () const                                          |
+------------------------------+----------------------------------------------------------------------------------------+
|                        float | :ref:`downloadProgress<api_WebRequest_64b85dec>` ()                                    |
+------------------------------+----------------------------------------------------------------------------------------+
|                          int | :ref:`downloadedBytes<api_WebRequest_3f95068a>` () const                               |
+------------------------------+----------------------------------------------------------------------------------------+
|                          int | :ref:`errorCode<api_WebRequest_0216ca5e>` () const                                     |
+------------------------------+----------------------------------------------------------------------------------------+
|                         bool | :ref:`isDone<api_WebRequest_3096a87c>` ()                                              |
+------------------------------+----------------------------------------------------------------------------------------+
|                         void | :ref:`readAnswer<api_WebRequest_837102fc>` ()                                          |
+------------------------------+----------------------------------------------------------------------------------------+
|                         void | :ref:`send<api_WebRequest_14c28d6e>` ()                                                |
+------------------------------+----------------------------------------------------------------------------------------+
|                         void | :ref:`setHeader<api_WebRequest_0ac32d19>` (const TString & key, const TString & value) |
+------------------------------+----------------------------------------------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`text<api_WebRequest_4896de1b>` () const                                          |
+------------------------------+----------------------------------------------------------------------------------------+
|                         bool | :ref:`operator==<api_WebRequest_ef31507a>` (const WebRequest & right) const            |
+------------------------------+----------------------------------------------------------------------------------------+



.. _api_WebRequest_static:

Static Methods
--------------

+--------------------------------------+-----------------------------------------------------------+
|  :ref:`WebRequest<api_WebRequest>` * | :ref:`get<api_WebRequest_618ce9b2>` (const TString & url) |
+--------------------------------------+-----------------------------------------------------------+

.. _api_WebRequest_methods:

Methods Description
-------------------

.. _api_WebRequest_7e51490c:

const uint8_t **WebRequest::data** () const

Returns the raw response data as a pointer to a uint8_t array.

----

.. _api_WebRequest_64b85dec:

 float **WebRequest::downloadProgress** ()

Returns the progress of the download as a percentage of the total content size as a float between 0.0f and 1.0f.

----

.. _api_WebRequest_3f95068a:

 int **WebRequest::downloadedBytes** () const

Returns the number of bytes downloaded so far in the response.

----

.. _api_WebRequest_0216ca5e:

 int **WebRequest::errorCode** () const

Returns the HTTP status code from the server response.

----

.. _api_WebRequest_618ce9b2:

 :ref:`WebRequest<api_WebRequest>` * **WebRequest::get** (:ref:`TString<api_TString>` & *url*)

Creates a WebRequest object configured for a GET request with the specified url.

----

.. _api_WebRequest_3096a87c:

 bool **WebRequest::isDone** ()

Checks if the HTTP request has been completed (i.e., response fully received or some error happened). Returns true if the request is complete; otherwise returns false.

----

.. _api_WebRequest_837102fc:

 void **WebRequest::readAnswer** ()

Reads the server's response, handling the status code, headers, and content. This function processes the response in chunks and updates the internal state accordingly.

----

.. _api_WebRequest_14c28d6e:

 void **WebRequest::send** ()

Sends the HTTP request by constructing the appropriate headers, establishing a socket connection, and writing the request to the server.

----

.. _api_WebRequest_0ac32d19:

 void **WebRequest::setHeader** (:ref:`TString<api_TString>` & *key*, :ref:`TString<api_TString>` & *value*)

Adds a custom header to the request. Each field must contain *key* as a header field name and value.

----

.. _api_WebRequest_4896de1b:

 :ref:`TString<api_TString>`  **WebRequest::text** () const

Returns the content of the response as a String

----

.. _api_WebRequest_ef31507a:

 bool **WebRequest::operator==** (:ref:`WebRequest<api_WebRequest>` & *right*) const

Compares WebRequest with *right* object for equality based on their headers. Returns true if requests are equal; otherwise returns false.


