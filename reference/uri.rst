.. _api_Uri:
Uri Class
================

Inherited: None

.. _api_Uri_description:
Description
-----------

Uri class provides an interface for working with URI's.



.. _api_Uri_public:
Public Methods
--------------

+-------------------------------------+---------------------------------------------------+
|                                     | :ref:`Uri<api_Uri_Uri>` (const std::string & uri) |
+-------------------------------------+---------------------------------------------------+
|                                     | :ref:`~Uri<api_Uri_~Uri>` ()                      |
+-------------------------------------+---------------------------------------------------+
| :ref:`std::string<api_std::string>` | :ref:`baseName<api_Uri_baseName>` () const        |
+-------------------------------------+---------------------------------------------------+
| :ref:`std::string<api_std::string>` | :ref:`dir<api_Uri_dir>` () const                  |
+-------------------------------------+---------------------------------------------------+
| :ref:`std::string<api_std::string>` | :ref:`fragment<api_Uri_fragment>` () const        |
+-------------------------------------+---------------------------------------------------+
| :ref:`std::string<api_std::string>` | :ref:`host<api_Uri_host>` () const                |
+-------------------------------------+---------------------------------------------------+
| :ref:`std::string<api_std::string>` | :ref:`name<api_Uri_name>` () const                |
+-------------------------------------+---------------------------------------------------+
| :ref:`std::string<api_std::string>` | :ref:`path<api_Uri_path>` () const                |
+-------------------------------------+---------------------------------------------------+
| :ref:`std::string<api_std::string>` | :ref:`query<api_Uri_query>` () const              |
+-------------------------------------+---------------------------------------------------+
| :ref:`std::string<api_std::string>` | :ref:`scheme<api_Uri_scheme>` () const            |
+-------------------------------------+---------------------------------------------------+
| :ref:`std::string<api_std::string>` | :ref:`suffix<api_Uri_suffix>` () const            |
+-------------------------------------+---------------------------------------------------+



.. _api_Uri_static:
Static Methods
--------------

None

.. _api_Uri_methods:
Methods Description
-------------------

.. _api_Uri_Uri:

**Uri::Uri** (:ref:`std::string<api_std::string>` & *uri*)

Default constructs an instance of Uri.

----

.. _api_Uri_~Uri:

**Uri::~Uri** ()

Destroys the instance of Uri.

----

.. _api_Uri_baseName:

:ref:`std::string<api_std::string>`  **Uri::baseName** () const

Returns a base name of file in the URI path.

----

.. _api_Uri_dir:

:ref:`std::string<api_std::string>`  **Uri::dir** () const

Returns a directory of URI path.

----

.. _api_Uri_fragment:

:ref:`std::string<api_std::string>`  **Uri::fragment** () const

Returns the fragment of the URI.

----

.. _api_Uri_host:

:ref:`std::string<api_std::string>`  **Uri::host** () const

Returns the host of the URI if it is defined; otherwise an empty string is returned.

----

.. _api_Uri_name:

:ref:`std::string<api_std::string>`  **Uri::name** () const

Returns a file name in the URI path.

----

.. _api_Uri_path:

:ref:`std::string<api_std::string>`  **Uri::path** () const

Returns the path of the URI.

----

.. _api_Uri_query:

:ref:`std::string<api_std::string>`  **Uri::query** () const

Returns the query string of the URI if there's a query string, or an empty result if not.

----

.. _api_Uri_scheme:

:ref:`std::string<api_std::string>`  **Uri::scheme** () const

Returns the scheme of the URI. If an empty string is returned, this means the scheme is undefined and the URI is then relative.

----

.. _api_Uri_suffix:

:ref:`std::string<api_std::string>`  **Uri::suffix** () const

Returns a file suffix in the URI path.

----


