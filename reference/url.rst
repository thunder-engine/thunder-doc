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
|  :ref:`TString<api_TString>` | :ref:`absoluteDir<api_Url_3fad1875>` () const                 |
+------------------------------+---------------------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`baseName<api_Url_4c3e8a75>` () const                    |
+------------------------------+---------------------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`completeSuffix<api_Url_fb21a9e6>` () const              |
+------------------------------+---------------------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`dir<api_Url_de41b2a6>` () const                         |
+------------------------------+---------------------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`fragment<api_Url_78df46e1>` () const                    |
+------------------------------+---------------------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`host<api_Url_5bc3a684>` () const                        |
+------------------------------+---------------------------------------------------------------+
|                         bool | :ref:`isAbsolute<api_Url_dc67b2a8>` () const                  |
+------------------------------+---------------------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`name<api_Url_a2e317fd>` () const                        |
+------------------------------+---------------------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`path<api_Url_ef32ca65>` () const                        |
+------------------------------+---------------------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`query<api_Url_bcd8763a>` () const                       |
+------------------------------+---------------------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`scheme<api_Url_52dc018a>` () const                      |
+------------------------------+---------------------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`suffix<api_Url_ac901243>` () const                      |
+------------------------------+---------------------------------------------------------------+
|                         bool | :ref:`operator==<api_Url_be410c59>` (const Url & right) const |
+------------------------------+---------------------------------------------------------------+



.. _api_Url_static:

Static Methods
--------------

None

.. _api_Url_methods:

Methods Description
-------------------

.. _api_Url_3fad1875:

 :ref:`TString<api_TString>`  **Url::absoluteDir** () const

Returns the absolute dir path of the URI.

----

.. _api_Url_4c3e8a75:

 :ref:`TString<api_TString>`  **Url::baseName** () const

Returns a base name of file in the URI path.

----

.. _api_Url_fb21a9e6:

 :ref:`TString<api_TString>`  **Url::completeSuffix** () const

Returns a file suffix in the URI path.

----

.. _api_Url_de41b2a6:

 :ref:`TString<api_TString>`  **Url::dir** () const

Returns a directory of URI path.

----

.. _api_Url_78df46e1:

 :ref:`TString<api_TString>`  **Url::fragment** () const

Returns the fragment of the URI.

----

.. _api_Url_5bc3a684:

 :ref:`TString<api_TString>`  **Url::host** () const

Returns the host of the URI if it is defined; otherwise an empty string is returned.

----

.. _api_Url_dc67b2a8:

 bool **Url::isAbsolute** () const

Returns true if provided path is absolute.

----

.. _api_Url_a2e317fd:

 :ref:`TString<api_TString>`  **Url::name** () const

Returns a file name in the URI path.

----

.. _api_Url_ef32ca65:

 :ref:`TString<api_TString>`  **Url::path** () const

Returns the path of the URI.

----

.. _api_Url_bcd8763a:

 :ref:`TString<api_TString>`  **Url::query** () const

Returns the query string of the URI if there's a query string, or an empty result if not.

----

.. _api_Url_52dc018a:

 :ref:`TString<api_TString>`  **Url::scheme** () const

Returns the scheme of the URI. If an empty string is returned, this means the scheme is undefined and the URI is then relative.

----

.. _api_Url_ac901243:

 :ref:`TString<api_TString>`  **Url::suffix** () const

Returns a file name suffix name of file in the URI path.

----

.. _api_Url_be410c59:

 bool **Url::operator==** (:ref:`Url<api_Url>` & *right*) const

Compares current Url with *right* hand Url; Returns true if Urls are equal.


