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

+------------------------------+------------------------------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`absoluteDir<api_Url_782e4160>` () const                          |
+------------------------------+------------------------------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`absoluteFilePath<api_Url_a73fb290>` () const                     |
+------------------------------+------------------------------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`baseName<api_Url_0893f2db>` () const                             |
+------------------------------+------------------------------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`completeSuffix<api_Url_902e83ad>` () const                       |
+------------------------------+------------------------------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`dir<api_Url_8f7092cd>` () const                                  |
+------------------------------+------------------------------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`filePath<api_Url_026a41f9>` () const                             |
+------------------------------+------------------------------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`fragment<api_Url_f02b6d89>` () const                             |
+------------------------------+------------------------------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`host<api_Url_7c34bd1a>` () const                                 |
+------------------------------+------------------------------------------------------------------------+
|                         bool | :ref:`isAbsolute<api_Url_fa89d50c>` () const                           |
+------------------------------+------------------------------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`name<api_Url_9df7a26b>` () const                                 |
+------------------------------+------------------------------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`query<api_Url_e0f57469>` () const                                |
+------------------------------+------------------------------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`relativeDir<api_Url_872ea450>` (const TString & base) const      |
+------------------------------+------------------------------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`relativeFilePath<api_Url_64cfe082>` (const TString & base) const |
+------------------------------+------------------------------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`scheme<api_Url_4a8cb2df>` () const                               |
+------------------------------+------------------------------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`suffix<api_Url_b421cd6a>` () const                               |
+------------------------------+------------------------------------------------------------------------+
|                         bool | :ref:`operator==<api_Url_05cfd91a>` (const Url & right) const          |
+------------------------------+------------------------------------------------------------------------+



.. _api_Url_static:

Static Methods
--------------

None

.. _api_Url_methods:

Methods Description
-------------------

.. _api_Url_782e4160:

 :ref:`TString<api_TString>`  **Url::absoluteDir** () const

Returns the absolute dir path of the URI.

----

.. _api_Url_a73fb290:

 :ref:`TString<api_TString>`  **Url::absoluteFilePath** () const

Returns the absolute file path of the URI.

----

.. _api_Url_0893f2db:

 :ref:`TString<api_TString>`  **Url::baseName** () const

Returns a base name of file in the URI path.

----

.. _api_Url_902e83ad:

 :ref:`TString<api_TString>`  **Url::completeSuffix** () const

Returns a file suffix in the URI path.

----

.. _api_Url_8f7092cd:

 :ref:`TString<api_TString>`  **Url::dir** () const

Returns a directory of URI path.

----

.. _api_Url_026a41f9:

 :ref:`TString<api_TString>`  **Url::filePath** () const

Returns the path of the URI.

----

.. _api_Url_f02b6d89:

 :ref:`TString<api_TString>`  **Url::fragment** () const

Returns the fragment of the URI.

----

.. _api_Url_7c34bd1a:

 :ref:`TString<api_TString>`  **Url::host** () const

Returns the host of the URI if it is defined; otherwise an empty string is returned.

----

.. _api_Url_fa89d50c:

 bool **Url::isAbsolute** () const

Returns true if provided path is absolute.

----

.. _api_Url_9df7a26b:

 :ref:`TString<api_TString>`  **Url::name** () const

Returns a file name in the URI path.

----

.. _api_Url_e0f57469:

 :ref:`TString<api_TString>`  **Url::query** () const

Returns the query string of the URI if there's a query string, or an empty result if not.

----

.. _api_Url_872ea450:

 :ref:`TString<api_TString>`  **Url::relativeDir** (:ref:`TString<api_TString>` & *base*) const

Returns a relative directory of URI path relative to the given *base* directory. If paths have no common prefix, returns the full absolute path. Handles parent directory transitions (../) when paths share a common prefix.

----

.. _api_Url_64cfe082:

 :ref:`TString<api_TString>`  **Url::relativeFilePath** (:ref:`TString<api_TString>` & *base*) const

Returns a relative file path of URI relative to the given *base* directory. If paths have no common prefix, returns the full absolute path including file name. Handles parent directory transitions (../) when paths share a common prefix.

----

.. _api_Url_4a8cb2df:

 :ref:`TString<api_TString>`  **Url::scheme** () const

Returns the scheme of the URI. If an empty string is returned, this means the scheme is undefined and the URI is then relative.

----

.. _api_Url_b421cd6a:

 :ref:`TString<api_TString>`  **Url::suffix** () const

Returns a file name suffix name of file in the URI path.

----

.. _api_Url_05cfd91a:

 bool **Url::operator==** (:ref:`Url<api_Url>` & *right*) const

Compares current Url with *right* hand Url; Returns true if Urls are equal.


