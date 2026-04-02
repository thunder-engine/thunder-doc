.. _api_Pipeline:

Pipeline
========

Inherited: None

.. _api_Pipeline_description:

Description
-----------

The Pipeline class allows users to manage render tasks and their connections within a pipeline. Users can query information about render tasks, their names, and links between them. The class also provides methods for loading and saving user-specific data related to the pipeline.



.. _api_Pipeline_public:

Public Methods
--------------

+-------------------------------------------+-----------------------------------------------------------------+
|  :ref:`Pipeline::Link<api_Pipeline_Link>` | :ref:`renderTaskLink<api_Pipeline_c683902e>` (int  index) const |
+-------------------------------------------+-----------------------------------------------------------------+
|               :ref:`TString<api_TString>` | :ref:`renderTaskName<api_Pipeline_b4602d9f>` (int  index) const |
+-------------------------------------------+-----------------------------------------------------------------+
|                                       int | :ref:`renderTasksCount<api_Pipeline_937c025b>` () const         |
+-------------------------------------------+-----------------------------------------------------------------+
|                                       int | :ref:`renderTasksLinksCount<api_Pipeline_208fe3d4>` () const    |
+-------------------------------------------+-----------------------------------------------------------------+



.. _api_Pipeline_static:

Static Methods
--------------

None

.. _api_Pipeline_methods:

Methods Description
-------------------

.. _api_Pipeline_c683902e:

 :ref:`Pipeline::Link<api_Pipeline::Link>`  **Pipeline::renderTaskLink** (int  *index*) const

Returns the link information for the render task at the specified index.

----

.. _api_Pipeline_b4602d9f:

 :ref:`TString<api_TString>`  **Pipeline::renderTaskName** (int  *index*) const

Returns the name of the render task at the specified index.

----

.. _api_Pipeline_937c025b:

 int **Pipeline::renderTasksCount** () const

Returns the number of render tasks in the pipeline.

----

.. _api_Pipeline_208fe3d4:

 int **Pipeline::renderTasksLinksCount** () const

Returns the number of links between render tasks in the pipeline.


