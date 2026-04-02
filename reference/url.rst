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
|  :ref:`TString<api_TString>` | :ref:`absoluteDir<api_Url_8d4e51a2>` () const                 |
+------------------------------+---------------------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`baseName<api_Url_d6a14ec0>` () const                    |
+------------------------------+---------------------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`completeSuffix<api_Url_79415cfd>` () const              |
+------------------------------+---------------------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`dir<api_Url_a946eb3f>` () const                         |
+------------------------------+---------------------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`fragment<api_Url_f81650ce>` () const                    |
+------------------------------+---------------------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`host<api_Url_72fe96b3>` () const                        |
+------------------------------+---------------------------------------------------------------+
|                         bool | :ref:`isAbsolute<api_Url_aefb0dc8>` () const                  |
+------------------------------+---------------------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`name<api_Url_0a59c7f6>` () const                        |
+------------------------------+---------------------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`path<api_Url_620e378b>` () const                        |
+------------------------------+---------------------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`query<api_Url_54019ae3>` () const                       |
+------------------------------+---------------------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`scheme<api_Url_fdb0c691>` () const                      |
+------------------------------+---------------------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`suffix<api_Url_19c8ea64>` () const                      |
+------------------------------+---------------------------------------------------------------+
|                         bool | :ref:`operator==<api_Url_1f5d6978>` (const Url & right) const |
+------------------------------+---------------------------------------------------------------+



.. _api_Url_static:

Static Methods
--------------

None

.. _api_Url_methods:

Methods Description
-------------------

.. _api_Url_8d4e51a2:

 :ref:`TString<api_TString>`  **Url::absoluteDir** () const

Returns the absolute dir path of the URI.

----

.. _api_Url_d6a14ec0:

 :ref:`TString<api_TString>`  **Url::baseName** () const

Returns a base name of file in the URI path.

----

.. _api_Url_79415cfd:

 :ref:`TString<api_TString>`  **Url::completeSuffix** () const

Returns a file suffix in the URI path.

----

.. _api_Url_a946eb3f:

 :ref:`TString<api_TString>`  **Url::dir** () const

Returns a directory of URI path.

----

.. _api_Url_f81650ce:

 :ref:`TString<api_TString>`  **Url::fragment** () const

Returns the fragment of the URI.

----

.. _api_Url_72fe96b3:

 :ref:`TString<api_TString>`  **Url::host** () const

Returns the host of the URI if it is defined; otherwise an empty string is returned.

----

.. _api_Url_aefb0dc8:

 bool **Url::isAbsolute** () const

Returns true if provided path is absolute.

----

.. _api_Url_0a59c7f6:

 :ref:`TString<api_TString>`  **Url::name** () const

Returns a file name in the URI path.

----

.. _api_Url_620e378b:

 :ref:`TString<api_TString>`  **Url::path** () const

Returns the path of the URI.

----

.. _api_Url_54019ae3:

 :ref:`TString<api_TString>`  **Url::query** () const

Returns the query string of the URI if there's a query string, or an empty result if not.

----

.. _api_Url_fdb0c691:

 :ref:`TString<api_TString>`  **Url::scheme** () const

Returns the scheme of the URI. If an empty string is returned, this means the scheme is undefined and the URI is then relative.

----

.. _api_Url_19c8ea64:

 :ref:`TString<api_TString>`  **Url::suffix** () const

Returns a file name suffix name of file in the URI path.

----

.. _api_Url_1f5d6978:

 bool **Url::operator==** (:ref:`Url<api_Url>` & *right*) const

Compares current Url with *right* hand Url; Returns true if Urls are equal.


