.. _api_FileSystemWatcher:

FileSystemWatcher
=================

Inherited: :ref:`Object<api_Object>`

.. _api_FileSystemWatcher_description:

Description
-----------

`FileSystemWatcher` allows registering files or directories to be monitored. When a watched file or directory changes, the appropriate signal (`fileChanged` or `directoryChanged`) is emitted.



.. _api_FileSystemWatcher_public:

Public Methods
--------------

+-------------+--------------------------------------------------------------------------------+
|        bool | :ref:`addPath<api_FileSystemWatcher_b6d2170c>` (const TString & path)          |
+-------------+--------------------------------------------------------------------------------+
|        bool | :ref:`addPaths<api_FileSystemWatcher_fbe05d29>` (const StringList & paths)     |
+-------------+--------------------------------------------------------------------------------+
|  StringList | :ref:`directories<api_FileSystemWatcher_fd26a049>` () const                    |
+-------------+--------------------------------------------------------------------------------+
|        void | :ref:`directoryChanged<api_FileSystemWatcher_675bc03d>` (const TString & path) |
+-------------+--------------------------------------------------------------------------------+
|        void | :ref:`fileChanged<api_FileSystemWatcher_c9067235>` (const TString & path)      |
+-------------+--------------------------------------------------------------------------------+
|  StringList | :ref:`files<api_FileSystemWatcher_deb943c1>` () const                          |
+-------------+--------------------------------------------------------------------------------+
|        bool | :ref:`removePath<api_FileSystemWatcher_a3692071>` (const TString & path)       |
+-------------+--------------------------------------------------------------------------------+
|        bool | :ref:`removePaths<api_FileSystemWatcher_4ed15b02>` (const StringList & paths)  |
+-------------+--------------------------------------------------------------------------------+



.. _api_FileSystemWatcher_static:

Static Methods
--------------

None

.. _api_FileSystemWatcher_methods:

Methods Description
-------------------

.. _api_FileSystemWatcher_b6d2170c:

 bool **FileSystemWatcher::addPath** (:ref:`TString<api_TString>` & *path*)

Add a single *path* to the watch list (file or directory).

Returns true if the *path* exists and was added (or already present).

----

.. _api_FileSystemWatcher_fbe05d29:

 bool **FileSystemWatcher::addPaths** (StringList & *paths*)

Add multiple *paths* to be watched.

Attempts to add each path and returns true only if all additions succeed.

----

.. _api_FileSystemWatcher_fd26a049:

 StringList **FileSystemWatcher::directories** () const

Return a list of currently watched directories.

----

.. _api_FileSystemWatcher_675bc03d:

 void **FileSystemWatcher::directoryChanged** (:ref:`TString<api_TString>` & *path*)

Emit the `directoryChanged` signal for the given directory path.

----

.. _api_FileSystemWatcher_c9067235:

 void **FileSystemWatcher::fileChanged** (:ref:`TString<api_TString>` & *path*)

Emit the `fileChanged` signal for the given path.

----

.. _api_FileSystemWatcher_deb943c1:

 StringList **FileSystemWatcher::files** () const

Return a list of currently watched files.

----

.. _api_FileSystemWatcher_a3692071:

 bool **FileSystemWatcher::removePath** (:ref:`TString<api_TString>` & *path*)

Remove a single watched path.

Returns true if the *path* was being watched and was removed.

----

.. _api_FileSystemWatcher_4ed15b02:

 bool **FileSystemWatcher::removePaths** (StringList & *paths*)

Remove multiple watched paths. Returns true if all *paths* were being watched and were removed; otherwise returns false.


