.. _api_Url:

Url
===

Inherited: None

.. _api_Url_description:

Description
-----------



.. _api_Url_public:

Public Methods
--------------

+------------------------------+---------------------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`absoluteDir<api_Url_a348f590>` () const                 |
+------------------------------+---------------------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`baseName<api_Url_c5a301ed>` () const                    |
+------------------------------+---------------------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`completeSuffix<api_Url_cb249ed8>` () const              |
+------------------------------+---------------------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`dir<api_Url_018de7fb>` () const                         |
+------------------------------+---------------------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`fragment<api_Url_07e52d4b>` () const                    |
+------------------------------+---------------------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`host<api_Url_06f3ec42>` () const                        |
+------------------------------+---------------------------------------------------------------+
|                         bool | :ref:`isAbsolute<api_Url_db6971c5>` () const                  |
+------------------------------+---------------------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`name<api_Url_e12bd6cf>` () const                        |
+------------------------------+---------------------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`path<api_Url_0624b15c>` () const                        |
+------------------------------+---------------------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`query<api_Url_4d1b20cf>` () const                       |
+------------------------------+---------------------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`scheme<api_Url_15ae7d9f>` () const                      |
+------------------------------+---------------------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`suffix<api_Url_1ce7f52b>` () const                      |
+------------------------------+---------------------------------------------------------------+
|                         bool | :ref:`operator==<api_Url_0315ce4b>` (const Url & right) const |
+------------------------------+---------------------------------------------------------------+



.. _api_Url_static:

Static Methods
--------------

None

.. _api_Url_methods:

Methods Description
-------------------

.. _api_Url_a348f590:

 :ref:`TString<api_TString>`  **Url::absoluteDir** () const

Returns the absolute dir path of the URI.

----

.. _api_Url_c5a301ed:

 :ref:`TString<api_TString>`  **Url::baseName** () const

Returns a base name of file in the URI path.

----

.. _api_Url_cb249ed8:

 :ref:`TString<api_TString>`  **Url::completeSuffix** () const

Returns a file suffix in the URI path.

----

.. _api_Url_018de7fb:

 :ref:`TString<api_TString>`  **Url::dir** () const

Returns a directory of URI path.

----

.. _api_Url_07e52d4b:

 :ref:`TString<api_TString>`  **Url::fragment** () const

Returns the fragment of the URI.

----

.. _api_Url_06f3ec42:

 :ref:`TString<api_TString>`  **Url::host** () const

Returns the host of the URI if it is defined; otherwise an empty string is returned.

----

.. _api_Url_db6971c5:

 bool **Url::isAbsolute** () const

Returns true if provided path is absolute.

----

.. _api_Url_e12bd6cf:

 :ref:`TString<api_TString>`  **Url::name** () const

Returns a file name in the URI path.

----

.. _api_Url_0624b15c:

 :ref:`TString<api_TString>`  **Url::path** () const

Returns the path of the URI.

----

.. _api_Url_4d1b20cf:

 :ref:`TString<api_TString>`  **Url::query** () const

Returns the query string of the URI if there's a query string, or an empty result if not.

----

.. _api_Url_15ae7d9f:

 :ref:`TString<api_TString>`  **Url::scheme** () const

Returns the scheme of the URI. If an empty string is returned, this means the scheme is undefined and the URI is then relative.

----

.. _api_Url_1ce7f52b:

 :ref:`TString<api_TString>`  **Url::suffix** () const

Returns a file name suffix name of file in the URI path.

----

.. _api_Url_0315ce4b:

 bool **Url::operator==** (:ref:`Url<api_Url>` & *right*) const

Compares current Url with *right* hand Url; Returns true if Urls are equal.


