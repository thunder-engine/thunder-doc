.. _api_Uri:

Uri Class
=========

Inherited: None

.. _api_Uri_description:

Description
-----------



.. _api_Uri_public:

Public Methods
--------------

+--------------+--------------------------------------------+
|  std::string | :ref:`baseName<api_Uri_baseName>` () const |
+--------------+--------------------------------------------+
|  std::string | :ref:`dir<api_Uri_dir>` () const           |
+--------------+--------------------------------------------+
|  std::string | :ref:`fragment<api_Uri_fragment>` () const |
+--------------+--------------------------------------------+
|  std::string | :ref:`host<api_Uri_host>` () const         |
+--------------+--------------------------------------------+
|  std::string | :ref:`name<api_Uri_name>` () const         |
+--------------+--------------------------------------------+
|  std::string | :ref:`path<api_Uri_path>` () const         |
+--------------+--------------------------------------------+
|  std::string | :ref:`query<api_Uri_query>` () const       |
+--------------+--------------------------------------------+
|  std::string | :ref:`scheme<api_Uri_scheme>` () const     |
+--------------+--------------------------------------------+
|  std::string | :ref:`suffix<api_Uri_suffix>` () const     |
+--------------+--------------------------------------------+



.. _api_Uri_static:

Static Methods
--------------

None

.. _api_Uri_methods:

Methods Description
-------------------

.. _api_Uri_baseName:

 std::string **Uri::baseName** () const

Returns a base name of file in the URI path.

----

.. _api_Uri_dir:

 std::string **Uri::dir** () const

Returns a directory of URI path.

----

.. _api_Uri_fragment:

 std::string **Uri::fragment** () const

Returns the fragment of the URI.

----

.. _api_Uri_host:

 std::string **Uri::host** () const

Returns the host of the URI if it is defined; otherwise an empty string is returned.

----

.. _api_Uri_name:

 std::string **Uri::name** () const

Returns a file name in the URI path.

----

.. _api_Uri_path:

 std::string **Uri::path** () const

Returns the path of the URI.

----

.. _api_Uri_query:

 std::string **Uri::query** () const

Returns the query string of the URI if there's a query string, or an empty result if not.

----

.. _api_Uri_scheme:

 std::string **Uri::scheme** () const

Returns the scheme of the URI. If an empty string is returned, this means the scheme is undefined and the URI is then relative.

----

.. _api_Uri_suffix:

 std::string **Uri::suffix** () const

Returns a file suffix in the URI path.


